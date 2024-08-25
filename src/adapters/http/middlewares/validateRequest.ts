import { plainToInstance } from "class-transformer";
import { NextFunction, Request, Response } from "express";
import { validate } from "class-validator";
import { HttpException } from "@/shared/types/HttpException";
import { httpException } from "@/adapters/http/handler/httpException";

export function validateRequest(dtoClass: any) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = async function (req: Request, res: Response, next: NextFunction) {
            const body = plainToInstance(dtoClass, req.body);
            const errors = await validate(body, { skipMissingProperties: false });

            if (errors.length > 0) {
                const details = errors.map((error) => ({
                    property: error.property,
                    message: error.constraints ? error.constraints[Object.keys(error.constraints)[0]] : "",
                }));
                return httpException(res, new HttpException(400, "validation error", details));
            }
            return originalMethod.apply(this, [req, res, next]);
        };

        return descriptor;
    };
}

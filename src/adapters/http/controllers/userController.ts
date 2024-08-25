import { Controller, controller, httpPost, request, response } from "inversify-express-utils";
import { Request, Response } from "express";
import { inject } from "inversify";
import { TYPES } from "@/infrastructure/ioc";
import { UserService } from "@/application/services";
import { LoginDto } from "@/application/dto/user";
import { httpException, httpResponse } from "@/adapters/http/handler";
import { HttpException } from "@/shared/types";
import { validateRequest } from "@/adapters/http/middlewares";

@controller("/user")
export class UserController implements Controller {
    private userService: UserService;

    public constructor(@inject(TYPES.UserService) userService: UserService) {
        this.userService = userService;
    }

    @httpPost("/login")
    @validateRequest(LoginDto)
    public async login(@request() req: Request, @response() res: Response) {
        try {
            const body = req.body as LoginDto;
            const user = await this.userService.login(body);

            if (user == null) {
                throw new HttpException(404, "user not found");
            }

            return httpResponse(res, { message: "login success", data: user });
        } catch (err: any) {
            return httpException(res, err);
        }
    }
}

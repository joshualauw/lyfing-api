import { Response } from "express";
import { httpResponse } from "@/adapters/http/handler/httpResponse";
import { HttpException } from "@/shared/types";

export function httpException(res: Response, err: any) {
    if (err instanceof HttpException) {
        return httpResponse(res, { status: err.status, message: err.message, details: err.details, success: false });
    } else {
        return httpResponse(res, { status: 500, message: "Internal server error", success: false });
    }
}

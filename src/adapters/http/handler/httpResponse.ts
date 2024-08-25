import { ApiResponse } from "@/shared/types";
import { Response } from "express";

export const httpResponse = (res: Response, response: Partial<ApiResponse>) => {
    if (response.details == undefined) response.details = null;
    if (response.data == undefined) response.data = null;
    if (response.status == undefined) response.status = 200;
    if (response.success == undefined) response.success = true;
    if (response.message == undefined) response.message = "ok";

    return res.status(response.status).send(response);
};

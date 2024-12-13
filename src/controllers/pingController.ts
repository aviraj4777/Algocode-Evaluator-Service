import { Request, RequestHandler, Response } from "express";

export const pingCheck: RequestHandler = (_req: Request, res: Response) => {
    res.status(200).json({
        message: "Ping check ok"
    });
};
import {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from "express";

const okPayload = (data: any = {}) => ({ ...data, ok: true });

export default () =>
  (req: Request, res: Response, next: NextFunction) => {
    res.ok = (data?: any) => res.json(okPayload(data));
    next();
  };

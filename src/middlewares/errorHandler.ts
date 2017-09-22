import {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from "express";

export default () =>
  (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(new Date(), '-', err);
    res.json(err);
  };

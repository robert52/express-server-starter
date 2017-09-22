import * as bodyParser from 'body-parser';
import { Express, Request, Response } from "express";
import { default as okResponse } from './middlewares/okResponse';
import { default as errorHandler } from './middlewares/errorHandler';
import { default as DbProvider } from './db';
import { default as api } from './modules/api';

export default (app: Express) => {
  const db = DbProvider({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });

  app.use(bodyParser.json());
  app.use(okResponse());
  app.get('/api/status', (req: Request, res: Response) => res.ok());
  api(app);
  app.use(errorHandler());

  return app;
}

// const app = express();
// const db = DbProvider({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
// });

// app.use(bodyParser.json());
// app.use(okResponse());
// app.get('/api/status', (req: Request, res: Response) => res.ok());

// api(app);

// app.use(errorHandler());

// const main = async () => ({
//   app,
//   http,
//   name: process.env.APP_NAME,
//   env: process.env.APP_ENVIRONMENT,
//   hostname: process.env.APP_HOSTNAME,
//   port: process.env.APP_PORT,
//   url: process.env.APP_URL,
//   logger: console,
// });

// module.exports = main;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const okResponse_1 = require("./middlewares/okResponse");
const errorHandler_1 = require("./middlewares/errorHandler");
const db_1 = require("./db");
const api_1 = require("./modules/api");
exports.default = (app) => {
    const db = db_1.default({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    });
    app.use(bodyParser.json());
    app.use(okResponse_1.default());
    app.get('/api/status', (req, res) => res.ok());
    api_1.default(app);
    app.use(errorHandler_1.default());
    return app;
};
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
//# sourceMappingURL=index.js.map
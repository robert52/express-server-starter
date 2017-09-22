'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const userRouter_1 = require("./userRouter");
exports.default = (app) => {
    app.use('/api', userRouter_1.default);
    return app;
};
//# sourceMappingURL=index.js.map
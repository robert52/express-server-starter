"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => (err, req, res, next) => {
    console.error(new Date(), '-', err);
    res.json(err);
};
//# sourceMappingURL=errorHandler.js.map
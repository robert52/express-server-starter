"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const okPayload = (data = {}) => ({ ...data, ok: true });
exports.default = () => (req, res, next) => {
    res.ok = (data) => res.json(okPayload(data));
    next();
};
//# sourceMappingURL=okResponse.js.map
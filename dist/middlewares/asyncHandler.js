"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (handler) => (req, res, next) => {
    Promise
        .resolve(handler(req, res, next))
        .catch(next);
};
//# sourceMappingURL=asyncHandler.js.map
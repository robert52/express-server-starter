'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const asyncHandler_1 = require("../../middlewares/asyncHandler");
const ServiceProvider_1 = require("./ServiceProvider");
const userService = ServiceProvider_1.default('UserService');
const router = express.Router();
router.get('/users', asyncHandler_1.default(async (req, res, next) => {
    const users = await userService.findAll();
    res.ok({ users });
}));
exports.default = router;
//# sourceMappingURL=userRouter.js.map
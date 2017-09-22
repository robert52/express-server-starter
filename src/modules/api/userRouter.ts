'use strict';

import * as express from 'express';
import { Request, Response, NextFunction } from "express";
import { default as asyncHandler } from '../../middlewares/asyncHandler';
import { default as ServiceProvider } from './ServiceProvider';

const userService = ServiceProvider('UserService');
const router = express.Router();

router.get('/users', asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await userService.findAll();
    res.ok({ users });
  })
);

export default router;

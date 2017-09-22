'use strict';

import { Express } from 'express';
import { default as userRouter } from './userRouter';

export default (app: Express): Express => {
  app.use('/api', userRouter);

  return app;
};

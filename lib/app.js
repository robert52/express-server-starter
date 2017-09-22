'use strict';

const http = require('http');
const express = require('express');
const config = require('dotenv').config();
const baseApp = express();
const app = require('../dist').default(baseApp);

module.exports = async () => ({
  app,
  http,
  name: process.env.APP_NAME,
  env: process.env.APP_ENVIRONMENT,
  hostname: process.env.APP_HOSTNAME,
  port: process.env.APP_PORT,
  url: process.env.APP_URL,
  logger: console,
});

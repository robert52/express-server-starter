'use strict';

import { default as UserService } from '../user/UserService';

const ServicesRegistry: { [key: string]: any } = {
  UserService,
}
let provider: { [key: string]: any } = {};

export default (className: string): any => {
  if (!provider[className]) {
    provider[className] = new ServicesRegistry[className];
  }

  return provider[className];
};

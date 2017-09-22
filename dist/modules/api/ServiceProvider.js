'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = require("../user/UserService");
const ServicesRegistry = {
    UserService: UserService_1.default,
};
let provider = {};
exports.default = (className) => {
    if (!provider[className]) {
        provider[className] = new ServicesRegistry[className];
    }
    return provider[className];
};
//# sourceMappingURL=ServiceProvider.js.map
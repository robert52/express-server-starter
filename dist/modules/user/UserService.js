'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const UserGateway_1 = require("./UserGateway");
const UserModel_1 = require("./UserModel");
class UserService {
    constructor() {
        this.userGateway = new UserGateway_1.default();
    }
    async findAll() {
        const entities = await this.userGateway.findAll();
        const users = entities.map((entity) => UserModel_1.default.fromEntity(entity));
        return users;
    }
}
exports.default = UserService;
//# sourceMappingURL=UserService.js.map
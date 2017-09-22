'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class UserEntity {
    static fromDataPacket(dataPacket) {
        const user = new UserEntity();
        user.id = dataPacket.id;
        user.firstName = dataPacket.first_name;
        user.lastName = dataPacket.last_name;
        return user;
    }
}
exports.default = UserEntity;
//# sourceMappingURL=UserEntity.js.map
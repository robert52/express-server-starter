"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserModel {
    constructor(data) {
        Object.assign(this, {}, data);
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    static fromEntity(entity) {
        const user = new UserModel(entity);
        return user;
    }
    toJSON() {
        const model = this;
        return {
            ...model,
            fullName: this.fullName
        };
    }
}
exports.default = UserModel;
//# sourceMappingURL=UserModel.js.map
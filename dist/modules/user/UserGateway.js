'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../db");
const UserEntity_1 = require("./UserEntity");
class UserGateway {
    async getConnection() {
        return db_1.default().getConnection();
        // return Promise.reject(new Error('No connections'));
    }
    async findAll() {
        const connection = await this.getConnection();
        const sql = 'SELECT * FROM `users`;';
        const [rows] = await connection.execute(sql);
        connection.release();
        return rows.map((row) => UserEntity_1.default.fromDataPacket(row));
    }
    async create() {
        const connection = await this.getConnection();
    }
}
exports.default = UserGateway;
//# sourceMappingURL=UserGateway.js.map
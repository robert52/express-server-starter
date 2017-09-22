"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require('mysql2/promise');
let instance;
class Db {
    constructor(config) {
        this._connection = null;
        this._pool = mysql.createPool(config);
        this.config = config;
    }
    async getConnection() {
        return this._pool.getConnection();
    }
    get connection() {
        return this._connection;
    }
    set connection(connection) {
        this._connection = connection;
    }
    async createConnection() {
        this.connection = await mysql.createConnection(this.config);
    }
}
exports.Db = Db;
function DbProvider(config) {
    if (!instance) {
        instance = new Db(config);
    }
    return instance;
}
exports.default = DbProvider;
;
//# sourceMappingURL=db.js.map
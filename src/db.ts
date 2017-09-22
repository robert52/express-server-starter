const mysql = require('mysql2/promise');
let instance: Db;

export class Db {
  private config: any;
  private _connection: any;
  private _pool: any;

  constructor(config: any) {
    this._connection = null;
    this._pool  = mysql.createPool(config);
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

export default function DbProvider(config?: any): Db {
  if (!instance) {
    instance = new Db(config);
  }

  return instance;
};

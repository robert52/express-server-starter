'use strict';

import DbProvider from '../../db';
import UserEntity from './UserEntity';

export default class UserGateway {
  async getConnection() {
    return DbProvider().getConnection();
    // return Promise.reject(new Error('No connections'));
  }

  async findAll() {
    const connection = await this.getConnection();
    const sql = 'SELECT * FROM `users`;';
    const [rows] = await connection.execute(sql);
    connection.release();

    return rows.map((row: any[]) => UserEntity.fromDataPacket(row));
  }

  async create() {
    const connection = await this.getConnection();
  }
}

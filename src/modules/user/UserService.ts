'use strict';

import UserGateway from './UserGateway';
import UserModel from './UserModel';
import UserEntity from './UserEntity';

export default class UserService {
  private userGateway: UserGateway;

  constructor() {
    this.userGateway = new UserGateway();
  }

  async findAll(): Promise<UserModel[]> {
    const entities = await this.userGateway.findAll();
    const users = entities.map((entity: UserEntity) => UserModel.fromEntity(entity));

    return users;
  }
}

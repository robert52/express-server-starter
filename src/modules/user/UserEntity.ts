'use strict';

export default class UserEntity {
  public id: number;
  public firstName: string;
  public lastName: string;

  static fromDataPacket(dataPacket: any) {
    const user = new UserEntity();
    user.id = dataPacket.id;
    user.firstName = dataPacket.first_name;
    user.lastName = dataPacket.last_name;

    return user;
  }
}

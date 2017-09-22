import UserEntity from './UserEntity';

export default class UserModel {
  public firstName: string;
  public lastName: string;

  constructor(data: any) {
    Object.assign(this, {}, data);
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  static fromEntity(entity: UserEntity): UserModel {
    const user = new UserModel(entity);

    return user;
  }

  toJSON(): any {
    const model: any = this;
    return {
      ...model,
      fullName: this.fullName
    };
  }
}

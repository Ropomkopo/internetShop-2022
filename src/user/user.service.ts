import { Inject, Injectable } from '@nestjs/common';
import { User } from '../interfaces/user-interface';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  async create(createUserDto: {}): Promise<User> {
    const createdCat = new this.userModel(createUserDto);
    return createdCat.save();
  }
  // async getHello() {
  //     return await "Hello..."
  // }
}

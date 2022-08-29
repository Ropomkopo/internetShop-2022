import { Inject, Injectable } from '@nestjs/common';
import { User } from '../interfaces/user-interface';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  async create(createCatDto: {}): Promise<User> {
    const createdCat = new this.userModel(createCatDto);
    return createdCat.save();
  }
  // async getHello() {
  //     return await "Hello..."
  // }
}

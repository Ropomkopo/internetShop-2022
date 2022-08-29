import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { usersProviders } from "./user.providers";
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    DatabaseModule
  ],
  providers: [UserService,
    ...usersProviders,],
  controllers: [UserController]
})
export class UserModule {}

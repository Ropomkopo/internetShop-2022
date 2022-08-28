import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    async getHello() {
        return await "Hello..."
    }
}

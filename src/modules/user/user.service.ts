import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(createUserDto: createUserDto) {
    const createdUser = await this.userRepository.createUser(createUserDto);
    return createdUser;
  }
}

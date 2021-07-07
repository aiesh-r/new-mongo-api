import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UserRepository } from './repositories/user.repository';
import { User } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = await this.userRepository.create(createUserDto);
    return createdUser;
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async findOneById(id: string): Promise<User> {
    // return this.userRepository.findByOne({ _id: id });
    return await this.userRepository.findOneById(Number(id));
  }

  async findOneAndUpdate(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    // return await this.userRepository.findOneAndUpdate({ _id: id }, user);

    return await this.userRepository.findOneAndUpdate(
      { _id: id },
      updateUserDto,
    );
  }

  async deleteUser(id: string): Promise<any> {
    return await this.userRepository.remove({ _id: id });
  }
}

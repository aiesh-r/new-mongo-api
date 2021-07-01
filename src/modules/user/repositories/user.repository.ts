import { Inject, InternalServerErrorException } from '@nestjs/common';
import { Model } from 'mongoose';
// import { User } from 'src/modules/user/interfaces/user.interface';
import { createUserDto } from 'src/modules/user/dto/createUser.dto';
import { User, UserDocument } from '../schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';

export class UserRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async createUser(createUserDto: createUserDto) {
    const newUser = new this.userModel({
      name: createUserDto.name,
      username: createUserDto.username,
      email: createUserDto.email,
      password: createUserDto.password,
      role: createUserDto.role,
    });

    try {
      const createdUser = await newUser.save();
      console.log('user', createdUser);
      return createdUser;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}

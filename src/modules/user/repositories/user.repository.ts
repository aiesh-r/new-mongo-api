import { Inject, InternalServerErrorException } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
// import { User } from 'src/modules/user/interfaces/user.interface';
import { CreateUserDto } from 'src/modules/user/dto/createUser.dto';
import { User, UserDocument } from '../schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { BaseAbstractRepository } from 'src/repositories/base/base.abstract.repository';

export class UserRepository extends BaseAbstractRepository<User> {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {
    super(userModel);
  }

  // async createUser(createUserDto: CreateUserDto): Promise<User> {
  //   const newUser = new this.userModel({
  //     name: createUserDto.name,
  //     username: createUserDto.username,
  //     email: createUserDto.email,
  //     password: createUserDto.password,
  //     role: createUserDto.role,
  //   });

  //   try {
  //     const createdUser = await newUser.save();
  //     console.log('user', createdUser);
  //     return createdUser;
  //   } catch (error) {
  //     throw new InternalServerErrorException(error);
  //   }
  // }

  // async getAllUsers(): Promise<User[]> {
  //   return await this.userModel.find();
  // }

  // async findByOne(filterQuery: FilterQuery<User>): Promise<User> {
  //   return await this.userModel.findOne(filterQuery);
  // }

  // async findOneAndUpdate(
  //   filterQuery: FilterQuery<User>,
  //   user: Partial<User>,
  // ): Promise<User> {
  //   return await this.userModel.findOneAndUpdate(filterQuery, user);
  // }

  // async deleteUser(id: string): Promise<any> {
  //   return await this.userModel.deleteOne({ _id: id });
  // }
}

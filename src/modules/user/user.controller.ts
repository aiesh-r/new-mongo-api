import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { User } from './schema/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/createuser')
  async createUser(
    @Body() createUserDto: CreateUserDto,
    @Res() res: any,
  ): Promise<User> {
    const newUser: any = await this.userService.createUser(createUserDto);
    return res.status(HttpStatus.CREATED).send(newUser);
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return await this.userService.getAllUsers();
  }

  @Get('/find/:id')
  async getOneUser(@Param('id') userId: string): Promise<User> {
    return await this.userService.findOneById(userId);
  }

  @Patch('update/:id')
  async updateOne(
    @Param('id') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<any> {
    return await this.userService.findOneAndUpdate(userId, updateUserDto);
  }

  @Delete('delete/:id')
  async deleteUser(@Param('id') userId: string): Promise<any> {
    return await this.userService.deleteUser(userId);
  }
}

import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/createuser')
  async createUser(@Body() createUserDto: createUserDto, @Res() res: any) {
    const newUser: any = await this.userService.createUser(createUserDto);
    return res.status(HttpStatus.CREATED).send(newUser);
  }
}

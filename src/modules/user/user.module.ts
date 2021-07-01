import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from 'src/database/database.module';
import { UserRepository } from 'src/modules/user/repositories/user.repository';
import { User, UserSchema } from './schema/user.schema';
import { UserController } from './user.controller';
import { userProviders } from './user.providers';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  // imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  // providers: [UserService, ...userProviders, UserRepository],
})
export class UserModule {}

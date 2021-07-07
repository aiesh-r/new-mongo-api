// import * as mongoose from 'mongoose';

// export const UserSchema = new mongoose.Schema({
//   id: String,
//   name: String,
//   username: String,
//   email: String,
//   password: String,
//   role: String,
// });

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  username: string;

  @Prop()
  role: string;

  @Prop()
  email: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

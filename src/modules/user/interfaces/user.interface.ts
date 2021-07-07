import { Document } from 'mongoose';

export interface User extends Document {
  id: string;
  name: String;
  username: String;
  email: String;
  password: String;
  role: String;
}

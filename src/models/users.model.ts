import { User } from '@/interfaces/users.interface';
import { Document, Schema, model } from 'mongoose';

const UserSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      default: function () {
        return this.email.split('@')[0];
      },
    },
    phone: {
      code: {
        type: String,
        required: true,
      },
      number: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true },
);

export const UserModel = model<User & Document>('User', UserSchema);

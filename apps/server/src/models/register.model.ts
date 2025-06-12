import mongoose, { Schema, Model } from 'mongoose';
import { IRegister } from '../types/auth.type.js';

const registerSchema: Schema<IRegister> = new Schema(
  {
    name: {
      type: String,
      require: [true, 'Name is required']
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        message: 'Invalid email format',
      },
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters'],
      select: false, // 🛡️ hides password field by default in queries
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
      validate: {
        validator: (value: string) => value.length === 11,
        message: 'Invalid phone format',
      },
    },
    billType: {
      type: String,
      enum: ['per-month', 'per-year'],
      default: 'per-month',
      required: [true, 'Bill type is required']
    },
    billPlan: {
      type: String,
      enum: ["arcade", "advanced", "pro"],
      default: 'arcade',
      required: [true, 'Bill plan is required']
    },
    addons: {
      type: [String]
    }
  },
);

export const Auth: Model<IRegister> = mongoose.model<IRegister>('User', registerSchema);

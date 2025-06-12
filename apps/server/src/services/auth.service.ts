import bcrypt from 'bcryptjs';
import { Auth  } from '../models/register.model.js';
import { ApiError } from '../utils/apiError.js';
import { IRegister } from '../types/auth.type.js';

export class AuthService {
  static async register(data: IRegister) {
    const hashedPassword = await bcrypt.hash(data.password!, 12);
    return await Auth.create({ ...data, password: hashedPassword });
  }

  static async login(email: string, password: string) {
    const user = await Auth.findOne({ email }).select('+password');
    if (!user) {
      throw new ApiError(401, 'User doesnt exist');
    } 
    if (user.password && !(await bcrypt.compare(password, user.password))) {
      throw new ApiError(401, 'Wrong password');
    }
    return user;
  }
}
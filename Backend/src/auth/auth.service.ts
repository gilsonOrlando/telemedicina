import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Auth } from './entities/auth.entity';

@Injectable()
export class AuthService {
  private users: Auth[] = [
    {
      id: '1',
      email: 'example@example.com',
      password: 'example',
    },
  ];
  create(email: string, password: string) {
    const user: Auth = {
      id: new Date().toISOString(),
      email,
      password,
    };
    this.users.push(user);
    return user;
  }

  login(userObjectLogin: CreateAuthDto) {
    const { email, password } = userObjectLogin;
    const account = this.users.find(
      (user) => user.email === email && user.password === password,
    );
    return account ? account : null;
  }
}

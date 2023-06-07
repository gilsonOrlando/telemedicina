import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Auth } from './entities/auth.entity';

@Injectable()
export class AuthService {
  private tasks: Auth[] = [
    {
      id: '1',
      correo: 'example@gmail.com',
      contraseña: 'alguna contraseña',
    },
  ];
  create(correo: string, contraseña: string) {
    const user: Auth = {
      id: new Date().toISOString(),
      correo,
      contraseña,
    };
    this.tasks.push(user);
    return user;
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class CitasService {
  getHello(): string {
    return 'Hello World!';
  }
}

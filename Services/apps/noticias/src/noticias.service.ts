import { Injectable } from '@nestjs/common';

@Injectable()
export class NoticiasService {
  getHello(): string {
    return 'Hello World!';
  }
}

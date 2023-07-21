import { Injectable } from '@nestjs/common';

@Injectable()
export class TuSaludService {
  getHello(): string {
    return 'Hello World!';
  }
}

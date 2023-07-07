import { Controller, Get } from '@nestjs/common';
import { NoticiasService } from './noticias.service';

@Controller()
export class NoticiasController {
  constructor(private readonly noticiasService: NoticiasService) {}

  @Get()
  getHello(): string {
    return this.noticiasService.getHello();
  }
}

import { Controller, Get, Post, Body } from '@nestjs/common';
import { NoticiasService } from './noticias.service';
import { createNoticiaDto } from './noticias.dto';

@Controller()
export class NoticiasController {
  constructor(private readonly noticiasService: NoticiasService) {}

  @Get('noticias')
  getNoticias() {
    return this.noticiasService.getNoticias();
  }
  @Post('noticias')
  createNoticia(@Body() noticia: createNoticiaDto) {
    return this.noticiasService.createNoticia(noticia);
  }
}

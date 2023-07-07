import { Controller, Get, Post, Body,  } from '@nestjs/common';
import { NoticiasService } from './noticias.service';
import { Noticia } from './schemas/noticias.schema';

@Controller()
export class NoticiasController {
  constructor(private readonly noticiasService: NoticiasService) {}
  
  @Get('noticias')
  getNoticias(){
    return this.noticiasService.getNoticias();
  }
  @Post('noticias')
  createNoticia(@Body() noticia: Noticia){
    return this.noticiasService.createNoticia(noticia);
  }
}

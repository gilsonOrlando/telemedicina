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


import { PublicidadService } from './publicidad.service';
import { RmqService } from '@app/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';


@Controller()
export class PublicidadController {
  constructor(
    private readonly publicidadService: PublicidadService,
    private readonly rmqService: RmqService,
    ) {}

  // @Get('publicidad')
  // getPublicidad() {
  //   return this.publicidadService.getPublicidad();
  // }

  @EventPattern('get_publicidad')
  async handleGetPublicidad(@Payload() data: any, @Ctx() context: RmqContext) {
    const publicidades = this.publicidadService.getPublicidad();
    this.rmqService.ack(context);
    return publicidades;
  }

  // @Post('publicidad')
  // createPublicidad(@Body() publicidad: Publicidad) {
  //   return this.publicidadService.createPublicidad(publicidad);
  // }

  @EventPattern('create_publicidad')
  async handleCreatePublicidad(@Payload() data: any, @Ctx() context: RmqContext) {
    const publicidad = this.publicidadService.createPublicidad(data);
    this.rmqService.ack(context);
    return publicidad;
  }

  @EventPattern('update_publicidad')
  async handleUpdatePublicidad(@Payload() data: any, @Ctx() context: RmqContext) {
    const publicidad = this.publicidadService.updatePublicidad(data);
    this.rmqService.ack(context);
    return publicidad;
  }
}

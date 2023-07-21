import { Controller, Get, Post, Body } from '@nestjs/common';
import { NoticiasService } from './noticias.service';
import { RmqService } from '@app/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller()
export class NoticiasController {
  constructor(private readonly noticiasService: NoticiasService,
    private readonly rmqService: RmqService,) {}

  //@Get('noticias')
  //getNoticias() {
    //return this.noticiasService.getNoticias();
  //}
  //@Post('noticias')
  //createNoticia(@Body() noticia: createNoticiaDto) {
    //return this.noticiasService.createNoticia(noticia);
  //}
  @EventPattern('get_noticias')
  async handleGetPublicidad(@Payload() data: any, @Ctx() context: RmqContext) {
    const noticias = this.noticiasService.getNoticias();
    this.rmqService.ack(context);
    return noticias;
  }

  @EventPattern('create_noticias')
  async handleCreatePublicidad(@Payload() data: any, @Ctx() context: RmqContext) {
    const noticias = this.noticiasService.createNoticia(data);
    this.rmqService.ack(context);
    return noticias;
  }

  @EventPattern('update_noticias')
  async handleUpdatePublicidad(@Payload() data: any, @Ctx() context: RmqContext) {
    const noticias = this.noticiasService.updatePublicidad(data);
    this.rmqService.ack(context);
    return noticias;
  }
}

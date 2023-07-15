import { Controller, Get, Post, Body } from '@nestjs/common';
import { PublicidadService } from './publicidad.service';
import { Publicidad } from './schemas/publicidad.schema';
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
    this.publicidadService.getPublicidad();
    this.rmqService.ack(context);
  }

  // @Post('publicidad')
  // createPublicidad(@Body() publicidad: Publicidad) {
  //   return this.publicidadService.createPublicidad(publicidad);
  // }

  @EventPattern('create_publicidad')
  async handleCreatePublicidad(@Payload() data: any, @Ctx() context: RmqContext) {
    this.publicidadService.createPublicidad(data);
    this.rmqService.ack(context);
  }
}

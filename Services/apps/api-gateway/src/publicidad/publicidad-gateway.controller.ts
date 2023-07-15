import { Body, Controller, Get, Post } from '@nestjs/common';
import { PublicidadService } from './publicidad-gateway.service'
import { PublicidadDto } from './dtos/publicidad.dto'

@Controller()
export class PublicidadController {
  constructor(private readonly publicidadService: PublicidadService) { }

  @Get('publicidad')
  getPublicidad() {
    return this.publicidadService.getPublicidad();
  }
  @Post('new-publicidad')
  createPublicidad(@Body() publicidad: PublicidadDto) {
    return this.publicidadService.createPublicidad(publicidad);
  }
}

import { Controller, Get, Post, Body,  } from '@nestjs/common';
import { PublicidadService } from './publicidad.service';
import { Publicidad } from './schemas/publicidad.schema';



@Controller()
export class PublicidadController {
  constructor(private readonly publicidadService: PublicidadService) {}

  @Get('publicidad')
  getPublicidad(){
    return this.publicidadService.getPublicidad();
  }
  @Post('publicidad')
  createPublicidad(@Body() publicidad: Publicidad){
    return this.publicidadService.createPublicidad(publicidad);
  }
}

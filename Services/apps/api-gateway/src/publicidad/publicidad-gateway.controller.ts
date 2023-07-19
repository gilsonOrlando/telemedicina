import { Body, Controller, Get, Post , Put, Param} from '@nestjs/common';
import { PublicidadService } from './publicidad-gateway.service'
import { PublicidadDto, updatePublicidadDto } from './dtos/publicidad.dto'
import { ApiTags } from '@nestjs/swagger';

@ApiTags("publicidad")
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
  @Put('update-publicidad/:id')
   updatePublicidad(
    @Param("id") id:string,
    @Body() publicidad: updatePublicidadDto) {
    return this.publicidadService.updatePublicidad(id, publicidad);
  }
}

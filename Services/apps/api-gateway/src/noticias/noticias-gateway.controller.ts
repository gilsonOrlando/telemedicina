import { Body, Controller, Get, Post, Put, Param } from '@nestjs/common';
import { PublicidadService } from './noticias-gateway.service';
import { PublicidadDto, UpdatePublicidadDto } from './dtos/noticias.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('publicidad')
@Controller()
export class PublicidadController {
  constructor(private readonly publicidadService: PublicidadService) { }

  @Get('publicidad')
  @ApiOperation({ summary: 'Obtener todas las publicidades' })
  @ApiResponse({ status: 200, description: 'Éxito', type: PublicidadDto, isArray: true })
  getPublicidad() {
    return this.publicidadService.getPublicidad();
  }

  @Post('new-publicidad')
  @ApiOperation({ summary: 'Crear nueva publicidad' })
  @ApiBody({ type: PublicidadDto })
  @ApiResponse({ status: 201, description: 'Creado', type: PublicidadDto })
  createPublicidad(@Body() publicidad: PublicidadDto) {
    return this.publicidadService.createPublicidad(publicidad);
  }

  @Put('update-publicidad/:id')
  @ApiOperation({ summary: 'Actualizar publicidad por ID' })
  @ApiParam({ name: 'id', description: 'ID de la publicidad' })
  @ApiBody({ type: UpdatePublicidadDto })
  @ApiResponse({ status: 200, description: 'Éxito', type: PublicidadDto })
  @ApiResponse({ status: 404, description: 'No encontrado' })
  updatePublicidad(
    @Param('id') id: string,
    @Body() publicidad: UpdatePublicidadDto,
  ) {
    return this.publicidadService.updatePublicidad(id, publicidad);
  }
}

import { Body, Controller, Get, Post, Put, Param } from '@nestjs/common';
import { NoticiasService } from './noticias-gateway.service';
import { NoticiasDto, UpdateNoticiaDto } from './dtos/noticias.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('noticias')
@Controller()
export class NoticiasController {
  constructor(private readonly NoticiasService: NoticiasService) { }

  @Get('noticias')
  @ApiOperation({ summary: 'Obtener todas las noticias' })
  @ApiResponse({ status: 200, description: 'Éxito', type: NoticiasDto, isArray: true })
  getPublicidad() {
    return this.NoticiasService.getNoticias();
  }

  @Post('new-noticia')
  @ApiOperation({ summary: 'Crear nueva noticia' })
  @ApiBody({ type: NoticiasDto })
  @ApiResponse({ status: 201, description: 'Creado', type: NoticiasDto })
  createPublicidad(@Body() noticias: NoticiasDto) {
    return this.NoticiasService.createNoticias(noticias);
  }

  @Put('update-noticias/:id')
  @ApiOperation({ summary: 'Actualizar noticias por ID' })
  @ApiParam({ name: 'id', description: 'ID de la noticia' })
  @ApiBody({ type: UpdateNoticiaDto })
  @ApiResponse({ status: 200, description: 'Éxito', type: NoticiasDto })
  @ApiResponse({ status: 404, description: 'No encontrado' })
  updatePublicidad(
    @Param('id') id: string,
    @Body() noticias: UpdateNoticiaDto,
  ) {
    return this.NoticiasService.updateNoticias(id, noticias);
  }
}

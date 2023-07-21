import { Body, Controller, Get, Post, Put, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { ConsultasService } from './consulta-gateway.service';
import { ConsultasDto, UpdateConsultasDto } from './dtos/consultas.dto';

@ApiTags('consultas')
@Controller()
export class ConsultasController {
  constructor(private readonly consultaService: ConsultasService) { }

  @Get('consultas')
  @ApiOperation({ summary: 'Obtener todas las consultas' })
  @ApiResponse({ status: 200, description: 'Éxito', type: ConsultasDto, isArray: true })
  getConsultas() {
    return this.consultaService.getConsultas();
  }

  @Post('new-consultas')
  @ApiOperation({ summary: 'Crear nueva consulta' })
  @ApiBody({ type: ConsultasDto })
  @ApiResponse({ status: 201, description: 'Creado', type: ConsultasDto })
  createConsultas(@Body() consultas: ConsultasDto) {
    return this.consultaService.createConsultas(consultas);
  }

  @Put('update-consultas/:id')
  @ApiOperation({ summary: 'Actualizar consultas por ID' })
  @ApiParam({ name: 'id', description: 'ID de la consultas' })
  @ApiBody({ type: UpdateConsultasDto })
  @ApiResponse({ status: 200, description: 'Éxito', type: ConsultasDto })
  @ApiResponse({ status: 404, description: 'No encontrado' })
  updateConsultas(
    @Param('id') id: string,
    @Body() consultas: UpdateConsultasDto,
  ) {
    return this.consultaService.updateConsultas(id, consultas);
  }
}

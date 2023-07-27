import { Body, Controller, Get, Post, Put, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { CitasGatewayService } from './citas-gateway.service';
import { createCitaMedicaPresencialDto, updateCitaMedicaPresencialDto } from './dtos/citaPresencial.dto';
import { createCitaMedicaVirtualDto, updateCitaMedicaVirtualDto } from './dtos/citaVirtual.dto';

@ApiTags('citas')
@Controller()
export class CitasController {
    constructor(private readonly citasService: CitasGatewayService) { }

    @Get('extremidades')
    @ApiOperation({ summary: 'Obtener todas las extremidades' })
    @ApiResponse({ status: 200, description: 'Éxito', type: createCitaMedicaPresencialDto, isArray: true })
    getExtremidades() {
        return this.citasService.getExtremidades();
    }

    @Get('doctor')
    @ApiOperation({ summary: 'Obtener todos los doctores' })
    @ApiResponse({ status: 200, description: 'Éxito', type: createCitaMedicaPresencialDto, isArray: true })
    getDoctores() {
        return this.citasService.getDoctor()
    }

    @Get('doctores/:especialidad')
    @ApiOperation({ summary: 'Obtener todos los doctores por especialidad' })
    @ApiResponse({ status: 200, description: 'Éxito', type: createCitaMedicaPresencialDto, isArray: true })
    getDoctoresByEspecialidad(@Param('especialidad') especialidad: any) {
        return this.citasService.getDoctorByEspecialidad()
    }
    @Get('horario-atencion')
    @ApiOperation({ summary: 'Obtener todos los horarios de atención' })
    @ApiResponse({ status: 200, description: 'Éxito', type: createCitaMedicaPresencialDto, isArray: true })
    getHorarioAtencion() {
        return this.citasService.getHorarioAtencion()
    }

    @Get('citas')
    @ApiOperation({ summary: 'Obtener todas las citas' })
    @ApiResponse({ status: 200, description: 'Éxito', type: createCitaMedicaPresencialDto, isArray: true })
    getCitasPresenciales() {
        return this.citasService.getCitasPresenciales();
    }

    @Get('citas-presenciales/:id')
    @ApiOperation({ summary: 'Obtener todas las citas presenciales' })
    @ApiResponse({ status: 200, description: 'Éxito', type: createCitaMedicaPresencialDto, isArray: true })
    getCitasPresencialesById(@Param('id') id: string) {
        return this.citasService.createCitaMedicaPresencial();
    }

    @Get('citas-virtuales/:id')
    @ApiOperation({ summary: 'Obtener todas las citas' })
    @ApiResponse({ status: 200, description: 'Éxito', type: createCitaMedicaVirtualDto, isArray: true })
    getCitasVirtualesById(@Param('id') id: string) {
        return this.citasService.createCitaMedicaVirtual();
    }

    @Post('cita-presencial')
    @ApiOperation({ summary: 'Crear nueva cita presencial' })
    @ApiBody({ type: createCitaMedicaPresencialDto })
    @ApiResponse({ status: 201, description: 'Creado', type: createCitaMedicaPresencialDto })
    createCitaPresencial(@Body() citaPresencial: createCitaMedicaPresencialDto) {
        return this.citasService.createCitaMedicaPresencial();
    }

    @Post('cita-virtual')
    @ApiOperation({ summary: 'Crear nueva cita virtual' })
    @ApiBody({ type: createCitaMedicaVirtualDto })
    @ApiResponse({ status: 201, description: 'Creado', type: createCitaMedicaVirtualDto })
    createCitaVirtual(@Body() citaVirtual: createCitaMedicaVirtualDto) {
        return this.citasService.createCitaMedicaVirtual();
    }
}

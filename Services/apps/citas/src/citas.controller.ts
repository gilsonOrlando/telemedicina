import { Controller, Get, Post, Body } from '@nestjs/common';
import { CitasService } from './citas.service';
import { CitaMedicaPresencial } from './schemas/citaMedicaPresencial.schema';

@Controller()
export class CitasController {
  constructor(private readonly citasService: CitasService) {}

  @Get('citas/medica/presencial')
  getCitas() {
    return this.citasService.getCitas();
  }
  

  // crear cita medica
  // crear cita medica presencial
  @Post('citas/medica/presencial')
  createCitaMedicaPresencial(@Body() citaMedicaPresencial: CitaMedicaPresencial) {
    return this.citasService.createCitaMedicaPresencial(citaMedicaPresencial);
  }
}

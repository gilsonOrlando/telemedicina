import { Controller, Get, Post, Body } from '@nestjs/common';
import { CitaMedicaPresencialService } from '../services/citaMedicaPresencial.service';
import { createCitaMedicaPresencialDto, updateCitaMedicaPresencialDto } from '../dtos/citaPresencial.dto';

@Controller()
export class CitasController {
  constructor(private readonly citaPresencialService: CitaMedicaPresencialService) {}

  @Get('citas/medica/presencial')
  getCitas() {
    return this.citaPresencialService.getCitas();
  }
  

  // crear cita medica
  // crear cita medica presencial
  @Post('citas/medica/presencial')
  createCitaMedicaPresencial(@Body() citaMedicaPresencial: createCitaMedicaPresencialDto) {
    return this.citaPresencialService.createCitaMedicaPresencial(citaMedicaPresencial);
  }
}

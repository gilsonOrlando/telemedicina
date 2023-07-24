import { Controller, Get, Post, Body } from '@nestjs/common';
import { CitaPresencialService } from '../services/citaMedicaPresencial.service';
import {
  createCitaMedicaPresencialDto,
  updateCitaMedicaPresencialDto,
} from '../../../api-gateway/src/citas/dtos/citaPresencial.dto';

@Controller()
export class CitaVirtualController {
  constructor(private readonly citaPresencialService: CitaPresencialService) {}

  @Get('citas/medica/presencial')
  getCitas() {
    return this.citaPresencialService.getCitas();
  }

  // crear cita medica presencial
  @Post('citas/medica/presencial')
  createCitaMedicaPresencial(
    @Body() citaMedicaPresencial: createCitaMedicaPresencialDto,
  ) {
    return this.citaPresencialService.createCitaMedicaPresencial(
      citaMedicaPresencial,
    );
  }
}

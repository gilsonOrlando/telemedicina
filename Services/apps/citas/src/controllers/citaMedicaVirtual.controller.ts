import { Controller, Get, Post, Body } from '@nestjs/common';
import { CitaVirtualService } from '../services/citaMedicaVirtual.service';
import {
  createCitaMedicaVirtualDto,
  updateCitaMedicaVirtualDto,
} from '../dtos/citaVirtual.dto';

@Controller()
export class CitaPresencialController {
  constructor(private readonly citaVirtualService: CitaVirtualService) {}

  @Get('citas/medica/virtual')
  getCitas() {
    return this.citaVirtualService.getCitas();
  }

  // crear cita medica Virtual
  @Post('citas/medica/virtual')
  createCitaMedicaVirtual(
    @Body() citaMedicaVirtual: createCitaMedicaVirtualDto,
  ) {
    return this.citaVirtualService.createCitaMedicaVirtual(citaMedicaVirtual);
  }
}

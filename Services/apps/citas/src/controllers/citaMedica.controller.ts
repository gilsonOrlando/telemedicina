import { Controller, Get, Post, Body } from '@nestjs/common';
import { CitaMedicaService } from '../services/citaMedica.service';

@Controller()
export class CitaMedicaController {
    constructor(private readonly citaMedicaService: CitaMedicaService) { }

    @Get('citas/medica/doctores')
    getDoctores() {
        return this.citaMedicaService.getDoctor();
    }

    // crear cita medica presencial
    //   @Post('citas/medica/presencial')
    //   createCitaMedicaPresencial(
    //     @Body() citaMedicaPresencial: createCitaMedicaPresencialDto,
    //   ) {
    //     return this.citaPresencialService.createCitaMedicaPresencial(
    //       citaMedicaPresencial,
    //     );
    @Get('citas/medica/extremidades')
    getExtremidades() {
        return this.citaMedicaService.getExtremidades()
    }
}




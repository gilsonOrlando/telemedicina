import { Controller, Get } from '@nestjs/common';
import { CitasService } from './citas.service';

@Controller()
export class CitasController {
  constructor(private readonly citasService: CitasService) {}

  @Get()
  getHello(): string {
    return this.citasService.getHello();
  }
}

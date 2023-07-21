import { Controller, Get } from '@nestjs/common';
import { TuSaludService } from './tu-salud.service';

@Controller()
export class TuSaludController {
  constructor(private readonly tuSaludService: TuSaludService) {}

  @Get()
  getHello(): string {
    return this.tuSaludService.getHello();
  }
}

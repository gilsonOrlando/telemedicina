import { Controller, Get } from '@nestjs/common';
import { AtencionVirtualizadaService } from './atencion-virtualizada.service';

@Controller()
export class AtencionVirtualizadaController {
  constructor(private readonly atencionVirtualizadaService: AtencionVirtualizadaService) {}

  @Get()
  getHello(): string {
    return this.atencionVirtualizadaService.getHello();
  }
}

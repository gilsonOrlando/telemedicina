import { Module } from '@nestjs/common';
import { AtencionVirtualizadaController } from './atencion-virtualizada.controller';
import { AtencionVirtualizadaService } from './atencion-virtualizada.service';

@Module({
  imports: [],
  controllers: [AtencionVirtualizadaController],
  providers: [AtencionVirtualizadaService],
})
export class AtencionVirtualizadaModule {}

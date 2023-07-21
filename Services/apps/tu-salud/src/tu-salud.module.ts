import { Module } from '@nestjs/common';
import { TuSaludController } from './tu-salud.controller';
import { TuSaludService } from './tu-salud.service';

@Module({
  imports: [],
  controllers: [TuSaludController],
  providers: [TuSaludService],
})
export class TuSaludModule {}

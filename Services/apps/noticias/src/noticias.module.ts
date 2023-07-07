import { Module } from '@nestjs/common';
import { NoticiasController } from './noticias.controller';
import { NoticiasService } from './noticias.service';

@Module({
  imports: [],
  controllers: [NoticiasController],
  providers: [NoticiasService],
})
export class NoticiasModule {}

import { NestFactory } from '@nestjs/core';
import { ConsultasModule } from './consultas.module';
import { RmqService } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(ConsultasModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('CONSULTAS_SERVICE'));
  await app.startAllMicroservices();
}
bootstrap(); 

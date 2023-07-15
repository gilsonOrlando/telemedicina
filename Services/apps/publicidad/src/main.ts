import { NestFactory } from '@nestjs/core';
import { PublicidadModule } from './publicidad.module';
import { RmqService } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(PublicidadModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('PUBLICIDAD_SERVICE'));
  await app.startAllMicroservices();
}
bootstrap();

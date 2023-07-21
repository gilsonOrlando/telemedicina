import { NestFactory } from '@nestjs/core';
import { NoticiasModule } from './noticias.module';
import { RmqService } from '@app/common';
async function bootstrap() {
  const app = await NestFactory.create(NoticiasModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('NOTICIAS_SERVICE'));
  await app.startAllMicroservices();
}
bootstrap();
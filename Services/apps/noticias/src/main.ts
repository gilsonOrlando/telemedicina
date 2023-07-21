import { NestFactory } from '@nestjs/core';
import { NoticiasModule } from './noticias.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(NoticiasModule);
  const config = new DocumentBuilder()
    .setTitle('Apis Noticia')
    .setDescription('Documentación del modulo noticia')
    .setVersion('1.0')
    .addTag('noticias')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}
bootstrap();

import { RmqService } from '@app/common';

  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('PUBLICIDAD_SERVICE'));
  await app.startAllMicroservices();
}
bootstrap();
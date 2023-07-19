import { NestFactory } from '@nestjs/core';
import { CitasModule } from './citas.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(CitasModule);

  const config = new DocumentBuilder()
  .setTitle('Apis Cita')
  .setDescription('Documentacion del modulo citas')
  .setVersion('1.0')
  .addTag('citas')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}
bootstrap();

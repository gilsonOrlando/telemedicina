import { NestFactory } from '@nestjs/core';
import { TuSaludModule } from './tu-salud.module';

async function bootstrap() {
  const app = await NestFactory.create(TuSaludModule);
  await app.listen(3000);
}
bootstrap();

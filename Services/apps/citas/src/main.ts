import { NestFactory } from '@nestjs/core';
import { CitasModule } from './citas.module';

async function bootstrap() {
  const app = await NestFactory.create(CitasModule);
  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { NoticiasModule } from './noticias.module';

async function bootstrap() {
  const app = await NestFactory.create(NoticiasModule);
  await app.listen(3000);
}
bootstrap();

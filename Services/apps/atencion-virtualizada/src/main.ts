import { NestFactory } from '@nestjs/core';
import { AtencionVirtualizadaModule } from './atencion-virtualizada.module';

async function bootstrap() {
  const app = await NestFactory.create(AtencionVirtualizadaModule);
  await app.listen(3000);
}
bootstrap();

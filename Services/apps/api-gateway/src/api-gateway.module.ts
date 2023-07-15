import { Module } from '@nestjs/common';
import { PUBLICIDAD_SERVICE } from 'apps/orders/src/constants/services';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import { DatabaseModule, RmqModule } from '@app/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Publicidad, PublicidadSchema } from 'apps/publicidad/src/schemas/publicidad.schema';
import { PublicidadController } from './publicidad/publicidad-gateway.controller';
import { PublicidadService } from './publicidad/publicidad-gateway.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/api-gateway/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: Publicidad.name, schema: PublicidadSchema}]),
    RmqModule.register({
      name: PUBLICIDAD_SERVICE,
    }),
    // AuthModule,
  ],
  controllers: [PublicidadController],
  providers: [PublicidadService],
})
export class ApiGatewayModule {}

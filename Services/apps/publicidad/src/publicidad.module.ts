import { Module } from '@nestjs/common';
import { PublicidadController } from './publicidad.controller';
import { PublicidadService } from './publicidad.service';
import { Publicidad, PublicidadSchema } from './schemas/publicidad.schema';
import { DatabaseModule, RmqModule } from '@app/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { PublicidadRepository } from './publicidad.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_BILLING_QUEUE: Joi.string().required(),
      }),
      envFilePath: './apps/publicidad/.env',
    }),
    DatabaseModule,
    RmqModule,
    MongooseModule.forFeature([
      { name: Publicidad.name, schema: PublicidadSchema },
    ]),
  ],
  controllers: [PublicidadController],
  providers: [PublicidadService, PublicidadRepository],
})
export class PublicidadModule {}

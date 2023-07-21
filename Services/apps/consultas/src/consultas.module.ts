import { Module } from '@nestjs/common';
import { ConsultasController } from './consultas.controller';
import { ConsultasService } from './consultas.service';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import { DatabaseModule, Publicidad, PublicidadSchema, RmqModule } from '@app/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsultasRepository } from './consultas.repository';

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
      envFilePath: './apps/consultas/.env',
    }),
    DatabaseModule,
    RmqModule,
    MongooseModule.forFeature([
      { name: Publicidad.name, schema: PublicidadSchema },
    ]),
  ],
  controllers: [ConsultasController],
  providers: [ConsultasService, ConsultasRepository],
})
export class ConsultasModule {}
 
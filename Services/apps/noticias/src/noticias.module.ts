import { Module } from '@nestjs/common';
import { NoticiasController } from './noticias.controller';
import { NoticiasService } from './noticias.service';
import { Noticia, NoticiaSchema } from '../../../libs/common/src/schemas/noticias.schema';
import { DatabaseModule } from '@app/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { NoticiasRepository } from './noticias.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/noticias/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: Noticia.name, schema: NoticiaSchema }]),
  ],
  controllers: [NoticiasController],
  providers: [NoticiasService, NoticiasRepository],
})
export class NoticiasModule {}
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

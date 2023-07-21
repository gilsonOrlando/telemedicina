import { Module } from '@nestjs/common';
import { NoticiasController } from './noticias.controller';
import { NoticiasService } from './noticias.service';
import { DatabaseModule, RmqModule, Noticia, NoticiaSchema  } from '@app/common';
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
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_BILLING_QUEUE: Joi.string().required(),
      }),
      envFilePath: './apps/noticias/.env',
    }),
    DatabaseModule,
    RmqModule,
    MongooseModule.forFeature([{ name: Noticia.name, schema: NoticiaSchema }]),
  ],
  controllers: [NoticiasController],
  providers: [NoticiasService, NoticiasRepository],
})
export class NoticiasModule {}
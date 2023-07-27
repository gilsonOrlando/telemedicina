import { Module } from '@nestjs/common';
import { PUBLICIDAD_SERVICE } from 'apps/orders/src/constants/services';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { CITAS_SERVICE, DatabaseModule, NOTICIAS_SERVICE, RmqModule } from '@app/common';
import { MongooseModule } from '@nestjs/mongoose';
import { 
  Publicidad,
  Noticia,
  CitaMedica,
  CitaMedicaPresencial,
  CitaMedicaVirtual,
  PublicidadSchema,
  NoticiaSchema,
  CitaMedicaSchema,
  citaMedicaPresencialchema,
  CitaMedicaVirtualSchema
 } from '@app/common';
import { PublicidadController } from './publicidad/publicidad-gateway.controller';
import { PublicidadService } from './publicidad/publicidad-gateway.service';
import { NoticiasController } from './noticias/noticias-gateway.controller';
import { NoticiasService } from './noticias/noticias-gateway.service';
import { CitasGatewayController } from './citas/citas-gateway.controller';
import { CitasGatewayService } from './citas/citas-gateway.service';

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
    MongooseModule.forFeature([
      { name: Publicidad.name, schema: PublicidadSchema},
      { name: Noticia.name, schema: NoticiaSchema},
      { name: CitaMedica.name, schema: CitaMedicaSchema},
      { name: CitaMedicaPresencial.name, schema: citaMedicaPresencialchema},
      { name: CitaMedicaVirtual.name, schema: CitaMedicaVirtualSchema}
    ]),
    RmqModule.register({
      name: PUBLICIDAD_SERVICE,
    }),
    RmqModule.register({
      name: NOTICIAS_SERVICE,
    }),
    RmqModule.register({
      name: CITAS_SERVICE,
    }),
    // AuthModule,
  ],
  controllers: [
    PublicidadController, 
    NoticiasController,
    CitasGatewayController
  ],
  providers: [
    PublicidadService, 
    NoticiasService,
    CitasGatewayService
  ],
})
export class ApiGatewayModule {}

import { Module } from '@nestjs/common';
import { CitasController } from './citas.controller';
import { CitasService } from './citas.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@app/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CitaMedica, CitaMedicaSchema } from './schemas/citaMedica.schema';
import { CitaMedicaPresencial, citaMedicaPresencialchema } from './schemas/citaMedicaPresencial.schema';
import { CitaMedicaVirtual, CitaMedicaVirtualSchema } from './schemas/citaMedicaVirtual.schema';
import { Diagnostico,Diagnosticochema } from './schemas/diagnostico.schema'
import { Enfermedad, Enfermedadschema } from './schemas/enfermedad.schema'
import { Medicina, Medicinachema } from './schemas/medicina.schema'
import { Receta, Recetachema } from './schemas/receta.schema'
import { Zona, ZonaSchema } from './schemas/zona.schema'
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/citas/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: CitaMedica.name, schema: CitaMedicaSchema }]),
    MongooseModule.forFeature([{ name: CitaMedicaPresencial.name, schema: citaMedicaPresencialchema }]),
    MongooseModule.forFeature([{ name: CitaMedicaVirtual.name, schema: CitaMedicaVirtualSchema }]),
    MongooseModule.forFeature([{ name: Diagnostico.name, schema: Diagnosticochema }]),
    MongooseModule.forFeature([{ name: Enfermedad.name, schema: Enfermedadschema }]),
    MongooseModule.forFeature([{ name: Medicina.name, schema: Medicinachema }]),
    MongooseModule.forFeature([{ name: Receta.name, schema: Recetachema }]),
    MongooseModule.forFeature([{ name: Zona.name, schema: ZonaSchema }]),
  ],
  controllers: [CitasController],
  providers: [CitasService],
})
export class CitasModule {}

import { Module } from '@nestjs/common';

// controllers
import { CitaVirtualController } from './controllers/citaMedicaPresencial.controller';
import { CitaPresencialController } from './controllers/citaMedicaVirtual.controller';

// services
import { CitaPresencialService } from './services/citaMedicaPresencial.service';
import { CitaVirtualService } from './services/citaMedicaVirtual.service';

import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@app/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CitaMedica, CitaMedicaSchema } from './schemas/citaMedica.schema';
import {
  CitaMedicaPresencial,
  citaMedicaPresencialchema,
} from './schemas/citaMedicaPresencial.schema';
import {
  CitaMedicaVirtual,
  CitaMedicaVirtualSchema,
} from './schemas/citaMedicaVirtual.schema';
import { Diagnostico, Diagnosticochema } from './schemas/diagnostico.schema';
import { Enfermedad, Enfermedadschema } from './schemas/enfermedad.schema';
import { Medicina, Medicinachema } from './schemas/medicina.schema';
import { Receta, Recetachema } from './schemas/receta.schema';
import { Zona, ZonaSchema } from './schemas/zona.schema';
import * as Joi from 'joi';
import { CitasRepository } from './repositories/citas.repository';



import { CitaMedicaController } from './controllers/citaMedica.controller';
import { CitaMedicaService } from './services/citaMedica.service';
import { ExtremidadRepository } from './repositories/extremidad.repository';
import { DoctorRepository } from './repositories/doctor.repository';
import { Extremidad, Extremidadschema } from './schemas/extremidad.schema';
import { Doctor, DoctorSchema } from './schemas/doctor.schema';

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
    MongooseModule.forFeature([
      { name: CitaMedica.name, schema: CitaMedicaSchema },
      { name: CitaMedicaPresencial.name, schema: citaMedicaPresencialchema },
      { name: CitaMedicaVirtual.name, schema: CitaMedicaVirtualSchema },
      { name: Diagnostico.name, schema: Diagnosticochema },
      { name: Enfermedad.name, schema: Enfermedadschema },
      { name: Medicina.name, schema: Medicinachema },
      { name: Receta.name, schema: Recetachema },
      { name: Zona.name, schema: ZonaSchema },
      { name: Extremidad.name, schema: Extremidadschema },
      { name: Doctor.name, schema: DoctorSchema},
    ]),
  ],
  controllers: [CitaPresencialController, CitaVirtualController, CitaMedicaController],
  providers: [CitaPresencialService, CitaVirtualService, CitaMedicaService, CitasRepository, ExtremidadRepository, DoctorRepository],
})
export class CitasModule {}

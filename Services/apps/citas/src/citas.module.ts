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
import { CitaMedica, CitaMedicaSchema } from '../../../libs/common/src/schemas/citaMedica.schema';
import {
  CitaMedicaPresencial,
  citaMedicaPresencialchema,
} from '@app/common';
import {
  CitaMedicaVirtual,
  CitaMedicaVirtualSchema,
} from '@app/common';
import { Diagnostico, Diagnosticochema } from '@app/common';
import { Enfermedad, Enfermedadschema } from '@app/common';
import { Medicina, Medicinachema } from '@app/common';
import { Receta, Recetachema } from '@app/common';
import { Zona, ZonaSchema } from '@app/common';
import * as Joi from 'joi';
import { CitasRepository } from './repositories/citas.repository';



import { CitaMedicaController } from './controllers/citaMedica.controller';
import { CitaMedicaService } from './services/citaMedica.service';
import { ExtremidadRepository } from './repositories/extremidad.repository';
import { DoctorRepository } from './repositories/doctor.repository';
import { Extremidad, Extremidadschema } from '@app/common';
import { Doctor, DoctorSchema } from '@app/common';

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

import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { SintomaGenerico } from '../../../../libs/common/src/schemas/enums/sintomaGenerico.enum';
import { Recomendacion } from '../../../../libs/common/src/schemas/recomendacion.schema';
import { Zona } from './zona.schema';
import { Diagnostico } from './diagnostico.schema';
import { Paciente } from '../../../../libs/common/src/schemas/paciente.schema';
import { Doctor } from '../../../../libs/common/src/schemas/doctor.schema';
//TODO el schema de los Circuitos
export type CitaMedicaDocument = HydratedDocument<CitaMedica>;

@Schema()
export class CitaMedica {
  @Prop({ required: true })
  especialidad: string;

  @Prop({
    type: [
      { required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Zona' },
    ],
  })
  zona_dolor: Zona[];
  @Prop({
    type: [
      {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Diagnostico',
      },
    ],
  })
  diagnostico_presuntivo: Diagnostico[];

  @Prop({
    type: [
      { required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Paciente' },
    ],
  })
  paciente: Paciente;
  @Prop({
    type: [
      {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recomendacion',
      },
    ],
  })
  recomendacion: Recomendacion;
  @Prop({
    type: [
      { required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    ],
  })
  doctor: Doctor;
}
export const CitaMedicaSchema = SchemaFactory.createForClass(CitaMedica);

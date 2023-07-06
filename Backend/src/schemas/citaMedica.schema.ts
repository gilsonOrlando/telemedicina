import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Recomendacion } from './recomendacion.schema';
import { Zona } from './zona.schema';
import { Diagnostico } from './diagnostico.schema';
import { Paciente } from './paciente.schema';
import { Doctor } from './doctor.schema';
//TODO el schema de los Circuitos
export type CitaMedicaDocument = HydratedDocument<CitaMedica>;


@Schema()
export class CitaMedica {

  @Prop({ required: true })
  especialidad: String;

  @Prop({ required: true })
  fecha_cita: Date;

  @Prop({
    type: [{ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Zona' }],
  })
  zona_dolor: Zona[];
  @Prop({
    type: [{ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Diagnostico' }],
  })
  diagnostico_presuntivo: Diagnostico[];
  
  @Prop({ required: true })
  tipo_cita: Date;

  @Prop({
    type: [{ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Paciente' }],
  })
  paciente: Paciente;
  @Prop({
    type: [{ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Recomendacion' }],
  })
  recomendacion: Recomendacion;
  @Prop({
    type: [{ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' }],
  })
  doctor: Doctor;

}
export const CitaMedicaSchema = SchemaFactory.createForClass(CitaMedica);
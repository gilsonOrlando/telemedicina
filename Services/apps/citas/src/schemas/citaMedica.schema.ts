import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { SintomaGenerico } from '../../../../libs/common/src/schemas/enums/sintomaGenerico.enum';
import { Recomendacion } from '../../../../libs/common/src/schemas/recomendacion.schema';
import { Zona } from './zona.schema';
import { Diagnostico } from './diagnostico.schema';
import { Paciente } from '../../../../libs/common/src/schemas/paciente.schema';
import { Doctor } from '../../../../libs/common/src/schemas/doctor.schema';
import { AbstractDocument } from '@app/common';
//TODO el schema de los Circuitos
export type CitaMedicaDocument = HydratedDocument<CitaMedica>;

@Schema({ versionKey: false })
export class CitaMedica extends AbstractDocument {
  @Prop({ required: true })
  especialidad: string;

  // @Prop({
  //   type: [
  //     { required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Zona' },
  //   ],
  // })
  // zona_dolor: Zona[];
  // @Prop({
  //   type: [
  //     {
  //       required: true,
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: 'Diagnostico',
  //     },
  //   ],
  // })
  @Prop({ required: true })
  diagnostico_presuntivo: string[];

  // @Prop({
  //   type: [
  //     { required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Paciente' },
  //   ],
  // })
  // paciente: Paciente;
  @Prop({ required: true })
  recomendacion: string[];
  // @Prop({
  //   type: [
  //     { required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
  //   ],
  // })
  // doctor: Doctor;
  @Prop({ required: true })
  fecha: Date;
  // 2023-07-11T12:34:56.789Z
}
export const CitaMedicaSchema = SchemaFactory.createForClass(CitaMedica);

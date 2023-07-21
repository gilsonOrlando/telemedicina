import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Doctor } from './doctor.schema';

//TODO el schema de los Circuitos
export type HorarioAtencionDocument = HydratedDocument<HorarioAtencion>;

@Schema()
export class HorarioAtencion {
  @Prop()
  horario_inicio: string;

  @Prop()
  horario_fin: string;

  @Prop()
  dias_atencion: string[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' }],
  })
  doctor: Doctor[];
}
export const HorarioAtencionSchema =
  SchemaFactory.createForClass(HorarioAtencion);

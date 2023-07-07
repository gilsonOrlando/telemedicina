import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Doctor } from './doctor.schema';

//TODO el schema de los Circuitos
export type HorarioAtencionDocument = HydratedDocument<HorarioAtencion>;

@Schema()
export class HorarioAtencion {
  @Prop()
  hora_inicio: Number;

  @Prop()
  hora_fin: Number;

  @Prop()
  dias_atencion: String[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' }],
    })
    doctor: Doctor;

}
export const HorarioAtencionSchema = SchemaFactory.createForClass(HorarioAtencion);
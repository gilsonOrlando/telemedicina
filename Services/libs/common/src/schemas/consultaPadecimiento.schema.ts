import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { SintomaGenerico } from './enums/sintomaGenerico.enum';
//TODO el schema de los Circuitos
export type ConsultaPadecimientoDocument =
  HydratedDocument<ConsultaPadecimiento>;

@Schema()
export class ConsultaPadecimiento {
  @Prop({ required: true })
  resultado: string;

  @Prop({ required: true })
  tiempo_padecimiento: number;

  @Prop({ required: true, enum: SintomaGenerico })
  sintoma: string;
}
export const ConsultaPadecimientoSchema =
  SchemaFactory.createForClass(ConsultaPadecimiento);

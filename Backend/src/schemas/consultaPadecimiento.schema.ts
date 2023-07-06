import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
//TODO el schema de los Circuitos
export type ConsultaPadecimientoDocument = HydratedDocument<ConsultaPadecimiento>;


@Schema()
export class ConsultaPadecimiento {

  @Prop({required:true})
  resultado: String;

  @Prop({required:true})
  tiempo_padecimiento: Number;

  @Prop({required:true})
  sintoma: String[];
}
export const ConsultaPadecimientoSchema = SchemaFactory.createForClass(ConsultaPadecimiento);
import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

//TODO el schema de los Circuitos
export type citaMedicaPresencialDocument = HydratedDocument<citaMedicaPresencial>;

@Schema()
export class citaMedicaPresencial {
  @Prop({required:true, unique:true})
  tiempo_espera_aprox: number;

  @Prop({required:true, unique:true})
  lugar: String;

}
export const citaMedicaPresencialchema = SchemaFactory.createForClass(citaMedicaPresencial);
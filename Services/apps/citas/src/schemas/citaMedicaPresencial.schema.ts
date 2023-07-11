import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

//TODO el schema de los Circuitos
export type CitaMedicaPresencialDocument =
  HydratedDocument<CitaMedicaPresencial>;

@Schema()
export class CitaMedicaPresencial {
  @Prop({ required: true, unique: true })
  tiempo_espera_aprox: number;

  @Prop({ required: true, unique: true })
  lugar: string;
}
export const citaMedicaPresencialchema =
  SchemaFactory.createForClass(CitaMedicaPresencial);

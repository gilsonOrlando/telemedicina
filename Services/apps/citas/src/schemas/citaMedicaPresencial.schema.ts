import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CitaMedica } from './citaMedica.schema';

//TODO el schema de los Circuitos
export type CitaMedicaPresencialDocument =
  HydratedDocument<CitaMedicaPresencial>;

@Schema({ versionKey: false })
export class CitaMedicaPresencial extends CitaMedica {
  @Prop({ required: true })
  tiempo_espera_aprox: number;

  @Prop({ required: true })
  lugar: string;
}
export const citaMedicaPresencialchema =
  SchemaFactory.createForClass(CitaMedicaPresencial);

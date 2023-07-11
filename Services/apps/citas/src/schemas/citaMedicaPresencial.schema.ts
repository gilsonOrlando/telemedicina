import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { AbstractDocument } from '@app/common';

//TODO el schema de los Circuitos
export type CitaMedicaPresencialDocument =
  HydratedDocument<CitaMedicaPresencial>;

@Schema()
export class CitaMedicaPresencial extends AbstractDocument {
  @Prop({ required: true, unique: true })
  tiempo_espera_aprox: number;

  @Prop({ required: true, unique: true })
  lugar: string;
}
export const citaMedicaPresencialchema =
  SchemaFactory.createForClass(CitaMedicaPresencial);

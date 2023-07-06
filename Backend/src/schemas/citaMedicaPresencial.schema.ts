import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CitaMedica } from './citaMedica.schema';

//TODO el schema de los Circuitos
export type citaMedicaPresencialDocument = HydratedDocument<citaMedicaPresencial>;

@Schema()
export class citaMedicaPresencial extends CitaMedica {
  @Prop({ required: true, unique: true })
  lugar: String;

}
export const citaMedicaPresencialchema = SchemaFactory.createForClass(citaMedicaPresencial);
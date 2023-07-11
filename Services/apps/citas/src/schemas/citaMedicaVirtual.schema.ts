import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

//TODO el schema de los Circuitos
export type CitaMedicaVirtualDocument = HydratedDocument<CitaMedicaVirtual>;

@Schema()
export class CitaMedicaVirtual {
  @Prop({ required: true, unique: true })
  tiempo_espera_aprox: number;

  @Prop({ required: true})
  estado: string;
}
export const CitaMedicaVirtualSchema =
  SchemaFactory.createForClass(CitaMedicaVirtual);

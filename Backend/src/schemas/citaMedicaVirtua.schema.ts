import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CitaMedica } from './citaMedica.schema';

//TODO el schema de los Circuitos
export type citaMedicaVirtualDocument = HydratedDocument<citaMedicaVirtual>;

@Schema()
export class citaMedicaVirtual  extends CitaMedica{
  @Prop({required:true, unique:true})
  tiempo_espera_aprox: String;

  @Prop({required:true, unique:true})
  es_estado: Boolean;

}
export const citaMedicaVirtualchema = SchemaFactory.createForClass(citaMedicaVirtual);
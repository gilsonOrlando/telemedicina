import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { TipoEstado } from './enums/estadoCita.enum';

//TODO el schema de los Circuitos
export type citaMedicaVirtualDocument = HydratedDocument<citaMedicaVirtual>;

@Schema()
export class citaMedicaVirtual {
  @Prop({required:true, unique:true})
  tiempo_espera_aprox: number;

  @Prop({required:true, unique:true, enum: TipoEstado})
  es_estado: String;

}
export const citaMedicaVirtualchema = SchemaFactory.createForClass(citaMedicaVirtual);
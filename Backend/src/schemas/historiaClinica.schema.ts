import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

//TODO el schema de los Circuitos
export type ZonaDocument = HydratedDocument<Zona>;

@Schema()
export class Zona {
  @Prop({required:true,unique:true})
  nombre: String;

  @Prop({required:true})
  ubicacion: String;

  @Prop({required:true ,unique:true,type: [String]})
  sintomas: String[];

  @Prop({required:true})
  imagen: String;
}
export const ZonaSchema = SchemaFactory.createForClass(Zona);
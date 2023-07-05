import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

//TODO el schema de los Circuitos
export type MedicinaDocument = HydratedDocument<Medicina>;

@Schema()
export class Medicina {
  @Prop({required:true, unique:true})
  nombre: String;

  @Prop({required:true, unique:true})
  descripcion: String;

}
export const Medicinachema = SchemaFactory.createForClass(Medicina);
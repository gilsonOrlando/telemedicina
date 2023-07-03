import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

//TODO el schema de los Circuitos
export type EnfermedadDocument = HydratedDocument<Enfermedad>;

@Schema()
export class Enfermedad {
  @Prop({required:true, unique:true})
  nombre: number;

  @Prop({required:true, unique:true})
  descripcion: String;

}
export const Enfermedadschema = SchemaFactory.createForClass(Enfermedad);
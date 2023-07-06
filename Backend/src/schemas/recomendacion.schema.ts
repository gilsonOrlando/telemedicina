import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ConsultaPadecimiento } from './consultaPadecimiento.schema';

//TODO el schema de los Circuitos
export type RecomendacionDocument = HydratedDocument<Recomendacion>;

@Schema()
export class Recomendacion {
  @Prop({required:true, unique:true})
  nombre: String;

  @Prop({required:true, unique:true})
  descripcion: String;
  
  @Prop({
  type: [{ required:true, type: mongoose.Schema.Types.ObjectId, ref: 'ConsultaPadecimiento' }],
  })
  recomendaciones: ConsultaPadecimiento;
 
  @Prop({required:true, unique:true})
  area: String[]
}
export const Recomendacionchema = SchemaFactory.createForClass(Recomendacion);
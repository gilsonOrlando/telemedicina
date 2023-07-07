import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Revision } from './revision.schema';

//TODO el schema de los Circuitos
export type ZonaDocument = HydratedDocument<Historia_clinica>;

@Schema()
export class Historia_clinica {
  @Prop({required:true,unique:true})
  numero: String;

  @Prop({required:true,unique:true})
  observaciones: String;

  @Prop({required:true,unique:true})
  historia_personal: String;

  @Prop({required:true ,unique:true,type: [String]})
  antecedentes_medicos: String[];

  @Prop({required:true ,unique:true,type: [String]})
  tratamiento: String[];
  @Prop({
    type: [{ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Revision' }],
  })
  revisiones: Revision[];
}
export const ZonaSchema = SchemaFactory.createForClass(Historia_clinica);
import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { TipoRevision } from './enums/revisionTipo.enum';
//TODO el schema de los Circuitos
export type RevisionDocument = HydratedDocument<Revision>;


@Schema()
export class Revision {
  @Prop({required:true, enum: TipoRevision})
  tipo: String;

  @Prop({required:true})
  resultado: String;  
}
export const RevisionSchema = SchemaFactory.createForClass(Revision);
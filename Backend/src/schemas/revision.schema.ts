import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { TipoRevision } from './enums/revisionTipo.enum';
import { Persona } from './persona.schemas';

//TODO el schema de los Circuitos
export type RevisionDocument = HydratedDocument<Revision>;


@Schema()
export class Revision {
  @Prop({required:true, enum: TipoRevision})
  tipo: String;

  @Prop({required:true})
  resultado: String;
  @Prop({
    type: [{ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Persona' }],
  })
  revision_persona: Persona;
}
export const RevisionSchema = SchemaFactory.createForClass(Revision);
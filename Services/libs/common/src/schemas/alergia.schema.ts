import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Persona } from '../../../../apps/auth/src/users/schemas/persona.schemas';
import { AbstractDocument } from '../database/abstract.schema';

//TODO el schema de los Circuitos
export type AlergiaDocument = HydratedDocument<Alergia>;

@Schema()
export class Alergia extends AbstractDocument {
  @Prop()
  descripcion: string;
  @Prop({
    type: [
      { required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Persona' },
    ],
  })
  persona: Persona[];
}
export const AlergiaSchema = SchemaFactory.createForClass(Alergia);

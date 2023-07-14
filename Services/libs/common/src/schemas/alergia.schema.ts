import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Persona } from '../../../../apps/auth/src/users/schemas/persona.schemas';

//TODO el schema de los Circuitos
export type CategoriesDocument = HydratedDocument<Alergia>;

@Schema()
export class Alergia {
  @Prop()
  descripcion: string;
  @Prop({
    type: [
      { required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Persona' },
    ],
  })
  persona: Persona[];
}
export const CategorySchema = SchemaFactory.createForClass(Alergia);

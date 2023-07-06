import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Persona } from './persona.schemas';
import { Paciente } from './paciente.schema';


//TODO el schema de los Circuitos
export type CategoriesDocument = HydratedDocument<Alergia>;

@Schema()
export class Alergia {
  @Prop()
  descripcion: String;
  @Prop({
    type: [{ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Paciente' }],
  })
  paciente: Paciente[];
}
export const CategorySchema = SchemaFactory.createForClass(Alergia);
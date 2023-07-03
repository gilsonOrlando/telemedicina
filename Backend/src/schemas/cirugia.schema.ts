import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Paciente } from './paciente.schema';


//TODO el schema de los Circuitos
export type CategoriesDocument = HydratedDocument<Cirugia>;

@Schema()
export class Cirugia {
  @Prop()
  descripcion: String;
  @Prop({
    type: [{ required:true, type: mongoose.Schema.Types.ObjectId, ref: 'Paciente' }],
      })
    paciente: Paciente[];
}
export const CategorySchema = SchemaFactory.createForClass(Cirugia);
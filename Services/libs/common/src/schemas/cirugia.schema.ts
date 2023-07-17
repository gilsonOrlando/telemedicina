import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Paciente } from './paciente.schema';
import { AbstractDocument } from '../database/abstract.schema';

//TODO el schema de los Circuitos
export type CirugiaDocument = HydratedDocument<Cirugia>;

@Schema()
export class Cirugia extends AbstractDocument{
  @Prop()
  descripcion: string;
  @Prop({
    type: [
      { required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Paciente' },
    ],
  })
  paciente: Paciente[];
}
export const CirugiaSchema = SchemaFactory.createForClass(Cirugia);

import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CitaMedica } from './citaMedica.schema';

//TODO el schema de los Circuitos
export type RecomendacionDocument = HydratedDocument<Recomendacion>;

@Schema()
export class Recomendacion {
  @Prop({ required: true, unique: true })
  nombre: string;

  @Prop({ required: true, unique: true })
  descripcion: string;

  @Prop({
    type: [
      {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CitaMedica',
      },
    ],
  })
  recomendaciones: CitaMedica[];
}
export const Recomendacionchema = SchemaFactory.createForClass(Recomendacion);

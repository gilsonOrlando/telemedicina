import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ConsultaPadecimiento } from './consultaPadecimiento.schema';

//TODO el schema de los Circuitos
export type RecomendacionDocument = HydratedDocument<Recomendacion>;

@Schema()
export class Recomendacion {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  descripcion: string;

  @Prop({ required: true })
  area: string[];

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ConsultaPadecimiento',
  })
  consultaPadecimiento: ConsultaPadecimiento[];
}
export const Recomendacionchema = SchemaFactory.createForClass(Recomendacion);

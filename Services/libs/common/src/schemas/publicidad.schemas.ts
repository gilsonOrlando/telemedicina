import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

//TODO el schema de los Circuitos
export type PublicidadDocument = HydratedDocument<Publicidad>;

@Schema()
export class Publicidad {
  @Prop({ required: true })
  descripcion: string;

  @Prop({ required: true })
  imagen: string;
}
export const PublicidadSchema = SchemaFactory.createForClass(Publicidad);

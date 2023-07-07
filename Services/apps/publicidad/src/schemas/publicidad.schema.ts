import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { AbstractDocument } from '@app/common';

//TODO el schema de los Circuitos
export type PublicidadDocument = HydratedDocument<Publicidad>;

@Schema({versionKey: false})
export class Publicidad extends AbstractDocument{
  @Prop({ required: true })
  descripcion: string;

  @Prop({ required: true })
  imagen: string;
}
export const PublicidadSchema = SchemaFactory.createForClass(Publicidad);

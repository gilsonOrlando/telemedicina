import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

//TODO el schema de los Circuitos
export type NoticiaDocument = HydratedDocument<Noticia>;

@Schema()
export class Noticia {
  @Prop({ required: true })
  titulo: string;

  @Prop({ required: true })
  descripcion: string;

  @Prop({ required: true, unique: true })
  fuente: string;

  @Prop({ required: true })
  imagen: string;

  @Prop({ required: true, unique: true })
  tipo: string;
}
export const NoticiaSchema = SchemaFactory.createForClass(Noticia);

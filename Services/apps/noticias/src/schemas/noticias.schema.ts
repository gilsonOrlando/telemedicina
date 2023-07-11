import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { AbstractDocument } from '@app/common';

//TODO el schema de los Circuitos
export type NoticiaDocument = HydratedDocument<Noticia>;

@Schema({ versionKey: false })
export class Noticia extends AbstractDocument {
  @Prop({ required: true })
  titulo: string;

  @Prop({ required: true })
  descripcion: string;

  @Prop({ required: true })
  fuente: string;

  @Prop({ required: true })
  imagen: string;

  @Prop({ required: true })
  tipo: string;
}
export const NoticiaSchema = SchemaFactory.createForClass(Noticia);

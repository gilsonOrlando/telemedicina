import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

//TODO el schema de los Circuitos
export type NoticiaDocument = HydratedDocument<Noticia>;

@Schema()
export class Noticia {
  @Prop({required:true})
  titulo: String;

  @Prop({required:true})
  descripcion: String;

  @Prop({required:true, unique:true})
  fuente: String;

  @Prop({required:true})
  imagen: String;

  @Prop({required:true, unique:true})
  tipo: String;

}
export const NoticiaSchema = SchemaFactory.createForClass(Noticia);
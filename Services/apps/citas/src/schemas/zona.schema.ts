import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

//TODO el schema de los Circuitos
export type ZonaDocument = HydratedDocument<Zona>;

@Schema()
export class Zona extends AbstractDocument {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  ubicacion: number;

  @Prop({ required: true })
  sintomas: string[];

  @Prop({ required: true })
  imagen: string;
}
export const ZonaSchema = SchemaFactory.createForClass(Zona);

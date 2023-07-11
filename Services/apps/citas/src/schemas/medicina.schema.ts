import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

//TODO el schema de los Circuitos
export type MedicinaDocument = HydratedDocument<Medicina>;

@Schema()
export class Medicina {
  @Prop({ required: true, unique: true })
  nombre: number;

  @Prop({ required: true, unique: true })
  descripcion: string;
}
export const Medicinachema = SchemaFactory.createForClass(Medicina);

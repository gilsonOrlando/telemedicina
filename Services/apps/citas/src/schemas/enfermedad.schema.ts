import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { AbstractDocument } from '@app/common';

//TODO el schema de los Circuitos
export type EnfermedadDocument = HydratedDocument<Enfermedad>;

@Schema()
export class Enfermedad extends AbstractDocument{
  @Prop({ required: true, unique: true })
  nombre: number;

  @Prop({ required: true, unique: true })
  descripcion: string;
}
export const Enfermedadschema = SchemaFactory.createForClass(Enfermedad);

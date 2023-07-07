import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Tipo_Zona } from './enums/tipoZona.enum';
import { Sintoma } from './enums/sintoma.enum';

//TODO el schema de los Circuitos
export type ZonaDocument = HydratedDocument<Zona>;

@Schema()
export class Zona {
  @Prop({ required: true, unique: true, enum: Tipo_Zona })
  nombre: string;

  @Prop({ required: true })
  ubicacion: number;

  @Prop({ required: true, unique: true, enum: Sintoma, type: [String] })
  sintomas: string[];

  @Prop({ required: true })
  imagen: string;
}
export const ZonaSchema = SchemaFactory.createForClass(Zona);

import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Rol } from './enums/rol.enum';

//TODO el schema de los Circuitos
export type CuentaDocument = HydratedDocument<Cuenta>;

@Schema()
export class Cuenta {
  @Prop({ required: true, unique: true })
  usuario: string;

  @Prop({ required: true, unique: true })
  contrasenia: string;

  @Prop({ required: true })
  estado: string;

  @Prop({ required: true, enum: Rol })
  rol: string;
}
export const Cuentachema = SchemaFactory.createForClass(Cuenta);

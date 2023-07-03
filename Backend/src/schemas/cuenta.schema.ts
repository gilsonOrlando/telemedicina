import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Rol } from './enums/rol.enum';

//TODO el schema de los Circuitos
export type CuentaDocument = HydratedDocument<Cuenta>;

@Schema()
export class Cuenta {
  @Prop({required:true, unique:true})
  usuario: String;

  @Prop({required:true, unique:true})
  contrasenia: String;

  @Prop({required:true})
  estado: String;

  @Prop({required:true, enum:Rol})
    rol: String;

}
export const Cuentachema = SchemaFactory.createForClass(Cuenta);
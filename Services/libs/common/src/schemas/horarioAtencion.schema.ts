import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Cuenta } from './cuenta.schema';

//TODO el schema de los Circuitos
export type HorarioAtencionDocument = HydratedDocument<HorarioAtencion>;

@Schema()
export class HorarioAtencion {
  @Prop()
  nombre: string;

  @Prop()
  edad: number;

  @Prop()
  correo: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cuenta' }],
  })
  cuenta: Cuenta;

  @Prop()
  telefono: string;

  //@Prop()
  //cuenta: String;

  @Prop()
  cedula: string;

  @Prop()
  genero: string;
}
export const HorarioAtencionSchema =
  SchemaFactory.createForClass(HorarioAtencion);

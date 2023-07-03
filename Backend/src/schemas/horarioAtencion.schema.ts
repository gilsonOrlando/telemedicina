import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Cuenta } from './cuenta.schema';

//TODO el schema de los Circuitos
export type HorarioAtencionDocument = HydratedDocument<HorarioAtencion>;

@Schema()
export class HorarioAtencion {
  @Prop()
  nombre: String;

  @Prop()
  edad: number;

  @Prop()
  correo: String;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cuenta' }],
    })
    cuenta: Cuenta;

  @Prop()
  telefono: String;

  //@Prop()
  //cuenta: String;

  @Prop()
  cedula: String;

  @Prop()
  genero: String;
}
export const HorarioAtencionSchema = SchemaFactory.createForClass(HorarioAtencion);
import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Cuenta } from './cuenta.schema';
import { ConsultaPadecimiento } from './consultaPadecimiento.schema';
import { Revision } from './revision.schema';

//TODO el schema de los Circuitos
export type PersonaDocument = HydratedDocument<Persona>;

@Schema()
export class Persona {
  @Prop({required:true,unique:true})
  nombre: String;

  @Prop({required:true})
  edad: Number;

  @Prop({required:true ,unique:true})
  correo: String;

  @Prop({
    type: [{ required:true, type: mongoose.Schema.Types.ObjectId, ref: 'Cuenta' }],
    })
    cuenta: Cuenta;
  
  @Prop({
    type: [{ required:true, type: mongoose.Schema.Types.ObjectId, ref: 'ConsultaPadecimiento' }],
      })
    consultas: ConsultaPadecimiento[];
  @Prop({
      type: [{ required:true, type: mongoose.Schema.Types.ObjectId, ref: 'Revision' }],
        })
      revisiones: Revision[];
  @Prop({required:true})
  telefono: String;

  @Prop({required:true,unique:true})
  cedula: String;

  @Prop({required:true})
  genero: String;
}
export const PersonaSchema = SchemaFactory.createForClass(Persona);
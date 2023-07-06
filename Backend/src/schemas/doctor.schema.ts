import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { HorarioAtencion } from './horarioAtencion.schema';
import { Persona } from './persona.schemas';

//TODO el schema de los Circuitos
export type DoctorDocument = HydratedDocument<Doctor>;

@Schema()
export class Doctor extends Persona {
  @Prop({required:true,unique:true})
  especialidad: String[];

  @Prop({
    type: [{ required:true, type: mongoose.Schema.Types.ObjectId, ref: 'HorarioAtencion' }],
    })
    horarios : HorarioAtencion[];


  @Prop({required:true})
  fotografia: String;

  @Prop({required:true,unique:true})
  logo_resetario: String;

  @Prop({required:true})
  firma: String;

  @Prop({required:true})
  direccion: String;
}
export const DoctorSchema = SchemaFactory.createForClass(Doctor);
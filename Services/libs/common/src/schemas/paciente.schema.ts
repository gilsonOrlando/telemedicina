import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Cuenta } from './cuenta.schema';
import { ConsultaPadecimiento } from './consultaPadecimiento.schema';
import { Revision } from './revision.schema';
import { Persona } from '../../../../apps/auth/src/users/schemas/persona.schemas';

//TODO el schema de los Circuitos
export type PacienteDocument = HydratedDocument<Paciente>;

@Schema()
export class Paciente extends Persona {
  @Prop({ required: true, unique: true })
  historiaMedico: string;

  @Prop({ required: true })
  antecedentesFamiliares: number;

  @Prop({ required: true, unique: true })
  otros: string;
}
export const PacienteSchema = SchemaFactory.createForClass(Paciente);

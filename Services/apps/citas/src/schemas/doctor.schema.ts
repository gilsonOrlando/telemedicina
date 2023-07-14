import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Especialidad } from '../../../../libs/common/src/schemas/enums/especialidad.enum';
import { HorarioAtencion } from '../../../../libs/common/src/schemas/horarioAtencion.schema';
import { Persona } from '../../../auth/src/users/schemas/persona.schemas';

//TODO el schema de los Circuitos
export type DoctorDocument = HydratedDocument<Doctor>;

@Schema()
export class Doctor extends Persona {
  @Prop({ required: true, unique: true, enum: Especialidad })
  especialidad: string;

  @Prop({
    type: [
      {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HorarioAtencion',
      },
    ],
  })
  horarios: HorarioAtencion;

  @Prop({ required: true })
  fotografia: string;

  @Prop({ required: true, unique: true })
  logo_resetario: string;

  @Prop({ required: true })
  firma: string;

  @Prop({ required: true })
  direccion: string;
}
export const DoctorSchema = SchemaFactory.createForClass(Doctor);

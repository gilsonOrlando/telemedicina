import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Cuenta } from '../../../../../libs/common/src/schemas/cuenta.schema';
import { ConsultaPadecimiento } from '../../../../../libs/common/src/schemas/consultaPadecimiento.schema';
import { Revision } from '../../../../../libs/common/src/schemas/revision.schema';
import { AbstractDocument } from '../../../../../libs/common/src/database/abstract.schema';

//TODO el schema de los Circuitos
export type PersonaDocument = HydratedDocument<Persona>;

@Schema()
export class Persona extends AbstractDocument{
  @Prop({ required: true, unique: true })
  nombre: string;

  @Prop({ required: true })
  edad: number;

  @Prop({ required: true, unique: true })
  correo: string;

  @Prop({
    type: [
      { required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Cuenta' },
    ],
  })
  cuenta: Cuenta;

  @Prop({
    type: [
      {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ConsultaPadecimiento',
      },
    ],
  })
  consultas: ConsultaPadecimiento[];
  @Prop({
    type: [
      { required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Revision' },
    ],
  })
  revisiones: Revision[];
  @Prop({ required: true })
  telefono: string;

  @Prop({ required: true, unique: true })
  cedula: string;

  @Prop({ required: true })
  genero: string;
}
export const PersonaSchema = SchemaFactory.createForClass(Persona);

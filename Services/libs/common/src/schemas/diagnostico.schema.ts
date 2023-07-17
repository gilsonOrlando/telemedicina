import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Enfermedad } from './enfermedad.schema';
import { Receta } from './receta.schema';
import { AbstractDocument } from '@app/common';

//TODO el schema de los Circuitos
export type DiagnosticoDocument = HydratedDocument<Diagnostico>;

@Schema()
export class Diagnostico extends AbstractDocument {
  @Prop({ required: true, unique: true })
  observacion: number;

  @Prop({
    type: [
      {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Enfermedad',
      },
    ],
  })
  enfermedades: Enfermedad[];

  @Prop({
    type: [
      { required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Receta' },
    ],
  })
  recetas: Receta[];
}
export const Diagnosticochema = SchemaFactory.createForClass(Diagnostico);

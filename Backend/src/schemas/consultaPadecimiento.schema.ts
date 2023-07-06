import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Persona } from './persona.schemas';
//TODO el schema de los Circuitos
export type ConsultaPadecimientoDocument = HydratedDocument<ConsultaPadecimiento>;


@Schema()
export class ConsultaPadecimiento {

  @Prop({required:true})
  resultado: String;

  @Prop({required:true})
  tiempo_padecimiento: Number;

  @Prop({required:true})
  sintoma_generico: String;

  @Prop({
    type: [{ required:true, type: mongoose.Schema.Types.ObjectId, ref: 'Persona' }],
    })
    personas: Persona[];
}
export const ConsultaPadecimientoSchema = SchemaFactory.createForClass(ConsultaPadecimiento);
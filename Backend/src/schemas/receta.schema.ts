import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Medicina } from './medicina.schema';

//TODO el schema de los Circuitos
export type RecetaDocument = HydratedDocument<Receta>;

@Schema()
export class Receta {
 @Prop({
    type: [{ required:true, type: mongoose.Schema.Types.ObjectId, ref: 'Medicina' }],
    })
    medicina: Medicina[];

    @Prop({required:true, unique:true})
  fecha_emision: Date;

  @Prop({required:true, unique:true})
  duracion_tratamiento: Date;
}
export const Recetachema = SchemaFactory.createForClass(Receta);
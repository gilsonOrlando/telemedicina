import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Medicina } from './medicina.schema';
import { AbstractDocument } from '@app/common';

//TODO el schema de los Circuitos
export type RecetaDocument = HydratedDocument<Receta>;

@Schema()
export class Receta extends AbstractDocument {
  @Prop({ required: true, unique: true })
  dosis: number;

  @Prop({
    type: [
      { required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Medicina' },
    ],
  })
  medicina: Medicina[];
}
export const Recetachema = SchemaFactory.createForClass(Receta);

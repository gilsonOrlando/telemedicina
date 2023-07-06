import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


//TODO el schema de los Circuitos
export type CategoriesDocument = HydratedDocument<Cirugia>;

@Schema()
export class Cirugia {
  @Prop({required:true,unique:true})
  nombre: String;
}
export const CategorySchema = SchemaFactory.createForClass(Cirugia);
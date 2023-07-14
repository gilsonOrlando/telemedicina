
import { Prop, Schema } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';
import { HydratedDocument } from 'mongoose';

export type ExtremidadDocument = HydratedDocument<Extremidad>;

export class Extremidad extends AbstractDocument {
    @Prop({ required: true })
    nombre: string

    @Prop({ required: true })
    imagen: string;
}

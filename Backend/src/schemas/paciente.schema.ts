import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Cuenta } from './cuenta.schema';
import { ConsultaPadecimiento } from './consultaPadecimiento.schema';
import { Revision } from './revision.schema';
import { Persona } from './persona.schemas';
import { CitaMedica } from './citaMedica.schema';
import { Historia_clinica } from './historiaClinica.schema';
import { Alergia } from './alergia.schema';
import { Cirugia } from './cirugia.schema';

//TODO el schema de los Circuitos
export type PacienteDocument = HydratedDocument<Paciente>;

@Schema()
export class Paciente extends Persona{
  @Prop({required:true,unique:true})
  historial_medico: String;

  @Prop({required:true})
  antecedentes_familiares: String;

  @Prop({required:true ,unique:true})
  otros: String;

  @Prop({
    type: [{ required:true, type: mongoose.Schema.Types.ObjectId, ref: 'CitaMedica' }],
    })
    citas_medicas: CitaMedica[];

    @Prop({
      type: [{ required:true, type: mongoose.Schema.Types.ObjectId, ref: 'HistoriaClinica' }],
      })
      Historia_clinica: Historia_clinica;

      @Prop({
        type: [{ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Alergia' }],
      })
      alergias: Alergia[];

      @Prop({
        type: [{ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Cirugias' }],
      })
      cirugias: Cirugia[];
}
export const PacienteSchema = SchemaFactory.createForClass(Paciente);
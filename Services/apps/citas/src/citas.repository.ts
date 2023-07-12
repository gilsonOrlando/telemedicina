import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { CitaMedica } from './schemas/citaMedica.schema';
import { CitaMedicaPresencial } from './schemas/citaMedicaPresencial.schema';
import { CitaMedicaVirtual } from './schemas/citaMedicaVirtual.schema';
import { Diagnostico } from './schemas/diagnostico.schema';
import { Enfermedad } from './schemas/enfermedad.schema';
import { Medicina } from './schemas/medicina.schema';
import { Receta } from './schemas/receta.schema';
import { Zona } from './schemas/zona.schema';

@Injectable()
export class CitasRepository extends AbstractRepository<
  | CitaMedica
  | CitaMedicaPresencial
  | CitaMedicaVirtual
  | Diagnostico
  | Enfermedad
  | Medicina
  | Receta
  | Zona
> {
  protected readonly logger = new Logger(CitasRepository.name);
  private citaMedicaModel: Model<CitaMedica>;
  private citaMedicaPresencialModel: Model<CitaMedicaPresencial>;
  private citaMedicaVirtualModel: Model<CitaMedicaVirtual>;
  private diagnosticoModel: Model<Diagnostico>;
  private enfermedadModel: Model<Enfermedad>;
  private medicinaModel: Model<Medicina>;
  private recetaModel: Model<Receta>;
  private zonaModel: Model<Zona>;

  constructor(
    @InjectModel(CitaMedica.name) citaMedicaModel: Model<CitaMedica>,
    @InjectModel(CitaMedicaPresencial.name)
    citaMedicaPresencialModel: Model<CitaMedicaPresencial>,
    @InjectModel(CitaMedicaVirtual.name)
    citaMedicaVirtualModel: Model<CitaMedicaVirtual>,
    @InjectModel(Diagnostico.name) diagnosticoModel: Model<Diagnostico>,
    @InjectModel(Enfermedad.name) enfermedadModel: Model<Enfermedad>,
    @InjectModel(Medicina.name) medicinaModel: Model<Medicina>,
    @InjectModel(Receta.name) recetaModel: Model<Receta>,
    @InjectModel(Zona.name) zonaModel: Model<Zona>,
    @InjectConnection() connection: Connection,
  ) {
    super(citaMedicaModel, connection);
    this.citaMedicaModel = citaMedicaModel;
    this.citaMedicaPresencialModel = citaMedicaPresencialModel;
    this.citaMedicaVirtualModel = citaMedicaVirtualModel;
    this.diagnosticoModel = diagnosticoModel;
    this.enfermedadModel = enfermedadModel;
    this.medicinaModel = medicinaModel;
    this.recetaModel = recetaModel;
    this.zonaModel = zonaModel;
  }
}

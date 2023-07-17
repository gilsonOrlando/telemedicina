import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { Extremidad } from '@app/common';

@Injectable()
export class ExtremidadRepository extends AbstractRepository<Extremidad
> {
  protected readonly logger = new Logger(ExtremidadRepository.name);
  private extremidadModel: Model<Extremidad>;

  constructor(
    @InjectModel(Extremidad.name) extremidadModel: Model<Extremidad>,
    @InjectConnection() connection: Connection,
  ) {
    super(extremidadModel, connection);
    this.extremidadModel = extremidadModel;
  }
}


import { Injectable, Logger } from '@nestjs/common';
import { ConsultaPadecimiento } from '@app/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { AbstractRepository } from '@app/common';

@Injectable()
export class ConsultasRepository extends AbstractRepository<ConsultaPadecimiento> {
  protected readonly logger = new Logger(ConsultasRepository.name);

  constructor(
    @InjectModel(ConsultaPadecimiento.name) ConsultasModel: Model<ConsultaPadecimiento>,
    @InjectConnection() connection: Connection,
  ) {
    super(ConsultasModel, connection);
  }
}

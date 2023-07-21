import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { Noticia } from '../../../libs/common/src/schemas/noticias.schema';

@Injectable()
export class NoticiasRepository extends AbstractRepository<Noticia> {
  protected readonly logger = new Logger(NoticiasRepository.name);

  constructor(
    @InjectModel(Noticia.name) noticiaModel: Model<Noticia>,
    @InjectConnection() connection: Connection,
  ) {
    super(noticiaModel, connection);
  }
}

import { Publicidad } from '@app/common';
import { AbstractRepository } from '@app/common';

import { Injectable, Logger } from '@nestjs/common';
import { Publicidad } from './schemas/publicidad.schema';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { AbstractRepository } from '@app/common';

@Injectable()
export class PublicidadRepository extends AbstractRepository<Publicidad> {
    protected readonly logger = new Logger(PublicidadRepository.name);
    
    constructor(
        @InjectModel(Publicidad.name) publicidadModel: Model<Publicidad>,
        @InjectConnection() connection: Connection,
    ) {
        super(publicidadModel, connection);
    }
}
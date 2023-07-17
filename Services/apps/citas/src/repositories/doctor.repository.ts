import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { Doctor } from '@app/common';

@Injectable()
export class DoctorRepository extends AbstractRepository<Doctor
> {
  protected readonly logger = new Logger(DoctorRepository.name);
  private doctorModel: Model<Doctor>;

  constructor(
    @InjectModel(Doctor.name) doctorModel: Model<Doctor>,
    @InjectConnection() connection: Connection,
  ) {
    super(doctorModel, connection);
    this.doctorModel = doctorModel;
  }
}

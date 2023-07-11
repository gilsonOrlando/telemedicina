import { Injectable } from '@nestjs/common';
import { CitasRepository } from './citas.repository'
import { CitaMedicaPresencial } from './schemas/citaMedicaPresencial.schema'

@Injectable()
export class CitasService {

  constructor(private readonly citasRepository: CitasRepository) {}

  async getCitas() {
    return this.citasRepository.find({});
  }
  async createCitaMedicaPresencial(citaMedicaPresencial: CitaMedicaPresencial) {
    return this.citasRepository.create(citaMedicaPresencial);
  }
}

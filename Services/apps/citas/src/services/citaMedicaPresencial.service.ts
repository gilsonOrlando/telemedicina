import { Injectable } from '@nestjs/common';
import { CitasRepository } from '../citas.repository'
import { createCitaMedicaPresencialDto, updateCitaMedicaPresencialDto } from '../dtos/citaPresencial.dto';

@Injectable()
export class CitaMedicaPresencialService {

  constructor(private readonly citasRepository: CitasRepository) {}

  async getCitas() {
    return this.citasRepository.find({});
  }
  async createCitaMedicaPresencial(citaMedicaPresencial: createCitaMedicaPresencialDto) {
    return this.citasRepository.create(citaMedicaPresencial);
  }
}

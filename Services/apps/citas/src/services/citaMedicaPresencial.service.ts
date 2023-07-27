import { Injectable } from '@nestjs/common';
import { CitasRepository } from '../repositories/citas.repository';
import { CitaMedicaPresencial } from '@app/common';

@Injectable()
export class CitaPresencialService {
  constructor(private readonly citasRepository: CitasRepository) {}

  async createCitaMedicaPresencial(
    citaMedicaPresencial: CitaMedicaPresencial,
  ) {
    return this.citasRepository.create(citaMedicaPresencial);
  } 
}

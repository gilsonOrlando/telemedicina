import { Injectable } from '@nestjs/common';
import { CitasRepository } from '../repositories/citas.repository';
import { CitaMedicaVirtual } from '@app/common';

@Injectable()
export class CitaVirtualService {
  constructor(private readonly citasRepository: CitasRepository) {}

  async createCitaMedicaVirtual(citaMedicaVirtual: CitaMedicaVirtual) {
    return this.citasRepository.create(citaMedicaVirtual);
  }
}

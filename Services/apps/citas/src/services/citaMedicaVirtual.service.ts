import { Injectable } from '@nestjs/common';
import { CitasRepository } from '../repositories/citas.repository';
import {
  createCitaMedicaVirtualDto,
  updateCitaMedicaVirtualDto,
} from '../../../api-gateway/src/citas/dtos/citaVirtual.dto';

@Injectable()
export class CitaVirtualService {
  constructor(private readonly citasRepository: CitasRepository) {}

  async getCitas() {
    return this.citasRepository.find({});
  }
  async createCitaMedicaVirtual(citaMedicaVirtual: createCitaMedicaVirtualDto) {
    return this.citasRepository.create(citaMedicaVirtual);
  }
}

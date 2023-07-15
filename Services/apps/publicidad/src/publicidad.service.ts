import { Injectable } from '@nestjs/common';
import { PublicidadRepository } from './publicidad.repository';
import { Publicidad } from './schemas/publicidad.schema';

@Injectable()
export class PublicidadService {
  constructor(private readonly publicidadRepository: PublicidadRepository) {}
  
  async getPublicidad() {
    return this.publicidadRepository.find({});
  }

  createPublicidad(publicidad: Publicidad) {
    return this.publicidadRepository.create(publicidad);
  }
}

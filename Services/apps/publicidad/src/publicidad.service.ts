import { Injectable } from '@nestjs/common';
import { PublicidadRepository } from './publicidad.repository';
import { Publicidad } from '@app/common';

@Injectable()
export class PublicidadService {
  constructor(private readonly publicidadRepository: PublicidadRepository) {}
  
  async getPublicidad() {
    return this.publicidadRepository.find({});
  }

  async createPublicidad(publicidad: Publicidad) {
    return this.publicidadRepository.create(publicidad);
  }

  async updatePublicidad(objetoPublicidad: {id : string, publicidad: Publicidad}) {
    return this.publicidadRepository.findOneAndUpdate({_id: objetoPublicidad.id}, objetoPublicidad.publicidad)
  }
}

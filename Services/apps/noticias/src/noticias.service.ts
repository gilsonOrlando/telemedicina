import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NoticiasRepository } from './noticias.repository';
import { createNoticiaDto } from './noticias.dto';
import {Noti} from '@app/common'

@Injectable()
export class NoticiasService {
  constructor(private readonly noticiasRepository: NoticiasRepository) {}

  async getNoticias() {
    return this.noticiasRepository.find({});
  }
  async createNoticia(noticia: createNoticiaDto) {
    return this.noticiasRepository.create(noticia);
  }
}


import { Publicidad } from '@app/common';

  async createPublicidad(publicidad: Publicidad) {
    return this.publicidadRepository.create(publicidad);
  }

  async updatePublicidad(objetoPublicidad: {id : string, publicidad: Publicidad}) {
    return this.publicidadRepository.findOneAndUpdate({_id: objetoPublicidad.id}, objetoPublicidad.publicidad)
  }
}

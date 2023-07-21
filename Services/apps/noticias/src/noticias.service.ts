import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NoticiasRepository } from './noticias.repository';
import {Noticia} from '@app/common'

@Injectable()
export class NoticiasService {
  constructor(private readonly noticiasRepository: NoticiasRepository) {}

  async getNoticias() {
    return this.noticiasRepository.find({});
  }
  async createNoticia(noticia: Noticia) {
    return this.noticiasRepository.create(noticia);
  }
  async updatePublicidad(objetoNoticia: {id : string, noticia: Noticia}) {
    return this.noticiasRepository.findOneAndUpdate({_id: objetoNoticia.id}, objetoNoticia.noticia)
  }
  //async deletePublicidad(objetoPublicidad: {id : string, noticia: Noticia}) {
    //return this.noticiasRepository.upsert
  //}
}

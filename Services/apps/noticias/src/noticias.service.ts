import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NoticiasRepository } from './noticias.repository';
import { Noticia } from './schemas/noticias.schema';

@Injectable()
export class NoticiasService {
  constructor(
    private readonly noticiasRepository: NoticiasRepository,  
  ) {}

  async getNoticias() {
    return this.noticiasRepository.find({});
  }
  async createNoticia(noticia: Noticia) {
    return this.noticiasRepository.create(noticia);
  }
}

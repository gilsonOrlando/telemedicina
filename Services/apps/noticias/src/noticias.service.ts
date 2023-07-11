import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NoticiasRepository } from './noticias.repository';
import { createNoticiaDto } from './noticias.dto';

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

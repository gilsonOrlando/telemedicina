import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NOTICIAS_SERVICE } from 'apps/orders/src/constants/services';
import { NoticiasDto, UpdateNoticiaDto } from './dtos/noticias.dto';

@Injectable()
export class NoticiasService {
  constructor(
    @Inject(NOTICIAS_SERVICE) private readonly noticiasServiceClient: ClientProxy,
  ) {}

  async getNoticias() {
    try {
      return new Promise((resolve, reject) => {
        this.noticiasServiceClient
          .send('get_noticias', {})
          .subscribe({
            next: (noticias) => resolve(noticias),
            error: (err) => reject(err),
          });
      });
    } catch (err) {
      throw err;
    }
  }
  async createNoticias(noticias: NoticiasDto) {
    try {
      return new Promise((resolve, reject) => {
        this.noticiasServiceClient
          .send('create_noticias', noticias)
          .subscribe({
            next: (noticias) => resolve(noticias),
            error: (err) => reject(err),
          });
      });
    } catch (err) {
      throw err;
    }
  }
  async updateNoticias(id:string,noticias: UpdateNoticiaDto) {
    try {
      return new Promise((resolve, reject) => {
        this.noticiasServiceClient
          .send('update_noticias',{id, noticias})
          .subscribe({
            next: (noticias) => resolve(noticias),
            error: (err) => reject(err),
          });
      });
    } catch (err) {
      throw err;
    }
  }
}

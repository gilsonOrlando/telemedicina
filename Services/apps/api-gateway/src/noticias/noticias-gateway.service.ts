import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PUBLICIDAD_SERVICE } from 'apps/orders/src/constants/services';
import { PublicidadDto, updatePublicidadDto } from './dtos/noticias.dto';


@Injectable()
export class PublicidadService {
  constructor(
    @Inject(PUBLICIDAD_SERVICE) private readonly publicidadServiceClient: ClientProxy,
  ) {}

  async getPublicidad() {
    try {
      return new Promise((resolve, reject) => {
        this.publicidadServiceClient
          .send('get_publicidad', {})
          .subscribe({
            next: (publicidades) => resolve(publicidades),
            error: (err) => reject(err),
          });
      });
    } catch (err) {
      throw err;
    }
  }
  async createPublicidad(publicidad: PublicidadDto) {
    try {
      return new Promise((resolve, reject) => {
        this.publicidadServiceClient
          .send('create_publicidad', publicidad)
          .subscribe({
            next: (publicidad) => resolve(publicidad),
            error: (err) => reject(err),
          });
      });
    } catch (err) {
      throw err;
    }
  }
  async updatePublicidad(id:string,publicidad: updatePublicidadDto) {
    try {
      return new Promise((resolve, reject) => {
        this.publicidadServiceClient
          .send('update_publicidad',{id, publicidad})
          .subscribe({
            next: (publicidad) => resolve(publicidad),
            error: (err) => reject(err),
          });
      });
    } catch (err) {
      throw err;
    }
  }
}


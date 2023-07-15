import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PUBLICIDAD_SERVICE } from 'apps/orders/src/constants/services';
import { PublicidadRepository } from 'apps/publicidad/src/publicidad.repository';
import { PublicidadDto } from './dtos/publicidad.dto';


@Injectable()
export class PublicidadService {
  constructor(
    @Inject(PUBLICIDAD_SERVICE) private readonly publicidadServiceClient: ClientProxy,
  ) {}

  async getPublicidad() {
    try {
      this.publicidadServiceClient.emit('get_publicidad', {});
    } catch (err) {
      throw err;
    }
  }
  async createPublicidad(publicidad: PublicidadDto) {
    try {
      this.publicidadServiceClient.emit('create_publicidad', publicidad);
    } catch (err) {
      throw err;
    }
  }
}


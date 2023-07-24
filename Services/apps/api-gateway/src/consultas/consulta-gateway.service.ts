import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CONSULTAS_SERVICE } from '@app/common';
import { ConsultasDto, UpdateConsultasDto } from './dtos/consultas.dto';


@Injectable()
export class ConsultasService {
  constructor(
    @Inject(CONSULTAS_SERVICE) private readonly consultasServiceClient: ClientProxy,
  ) {}
 
  async getConsultas() {
    try {
      return new Promise((resolve, reject) => {
        this.consultasServiceClient
          .send('get_consulta', {})
          .subscribe({
            next: (consultas) => resolve(consultas),
            error: (err) => reject(err),
          });
      });
    } catch (err) {
      throw err;
    }
  }
  async createConsultas(consultas: ConsultasDto) {
    try {
      return new Promise((resolve, reject) => {
        this.consultasServiceClient
          .send('create_consultas', consultas)
          .subscribe({
            next: (consultas) => resolve(consultas),
            error: (err) => reject(err),
          });
      });
    } catch (err) {
      throw err;
    }
  }
  async updateConsultas(id:string,consultas: UpdateConsultasDto) {
    try {
      return new Promise((resolve, reject) => {
        this.consultasServiceClient
          .send('update_consultas',{id, consultas})
          .subscribe({
            next: (consultas) => resolve(consultas),
            error: (err) => reject(err),
          });
      });
    } catch (err) {
      throw err;
    }
  }
}

import { Injectable } from '@nestjs/common';
import { ConsultasRepository } from './consultas.repository';
import { ConsultaPadecimiento } from '@app/common';

@Injectable()
export class ConsultasService {
  constructor(private readonly consultasRepository: ConsultasRepository) {}
  
  async getConsultas() {
    return this.consultasRepository.find({});
  }

  async createConsultas(consultaPadecimiento: ConsultaPadecimiento) {
    return this.consultasRepository.create(consultaPadecimiento);
  }
  async updateConsulta(objetoConsultas: {id : string, consulta: ConsultaPadecimiento}) {
    return this.consultasRepository.findOneAndUpdate({_id: objetoConsultas.id}, objetoConsultas.consulta)
  } 
}

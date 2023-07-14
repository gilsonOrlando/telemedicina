import { Injectable } from '@nestjs/common';
import { CitasRepository } from '../repositories/citas.repository';
import { Doctor } from '../schemas/doctor.schema';
import { Extremidad } from '../schemas/extremidad.schema';


@Injectable()
export class CitaMedica{
    constructor(private readonly citaRepository: CitasRepository){}
    async getExtremidades(): Promise<Extremidad[]>{
        return this.citaRepository.find({});
    }
    async getDoctor(): Promise<Doctor[]>{
        return this.citaRepository.find({});
    }
}
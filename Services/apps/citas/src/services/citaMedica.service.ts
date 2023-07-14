import { Injectable } from '@nestjs/common';
import { CitasRepository } from '../repositories/citas.repository';
import { Doctor } from '../schemas/doctor.schema';
import { Extremidad } from '../schemas/extremidad.schema';
import { ExtremidadRepository } from '../repositories/extremidad.repository';
import { DoctorRepository } from '../repositories/doctor.repository';


@Injectable()
export class CitaMedicaService{
    constructor(
        private readonly extremidadRepository: ExtremidadRepository,
        private readonly doctorRepository: DoctorRepository
        ){}
    async getExtremidades(): Promise<Extremidad[]>{
        return this.extremidadRepository.find({});
    }
    async getDoctor(): Promise<Doctor[]>{
        return this.doctorRepository.find({});
    }
}
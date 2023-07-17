import { Injectable } from '@nestjs/common';
import { Doctor } from '@app/common';
import { Extremidad } from '@app/common';
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
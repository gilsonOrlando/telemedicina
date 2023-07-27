import { Injectable } from '@nestjs/common';
import { Doctor } from '@app/common';
import { Extremidad } from '@app/common';
import { ExtremidadRepository } from '../repositories/extremidad.repository';
import { DoctorRepository } from '../repositories/doctor.repository';
import { CitasRepository } from '../repositories/citas.repository';


@Injectable()
export class CitaMedicaService{
    constructor(
        private readonly extremidadRepository: ExtremidadRepository,
        private readonly doctorRepository: DoctorRepository,
        private readonly citasRepository: CitasRepository,
        ){}
    async getExtremidades(): Promise<Extremidad[]>{
        return this.extremidadRepository.find({});
    }
    async getDoctor(): Promise<Doctor[]>{
        return this.doctorRepository.find({});
    }
    async getDoctorByEspecialidad(especialidad: string): Promise<Doctor[]>{
        return this.doctorRepository.find({especialidad: especialidad});
    }
    async getHorarioAtencion(doctor: string): Promise<Doctor[]>{
        return this.doctorRepository.find({_id: doctor});
    }
// nuevas funciones

    async getCitas() {
        return this.citasRepository.find({});
      }
    async registerDoctor(doctor: Doctor) {
        return this.doctorRepository.create(doctor);
      }
    }
    async 

import { Inject,Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CITAS_SERVICE } from '@app/common';

@Injectable()
export class CitasGatewayService {
    constructor(
        @Inject(CITAS_SERVICE) private readonly citasServiceClient: ClientProxy,
      ) {}
    // citas Presencial
      async getExtremidades() {
        try {
          return new Promise((resolve, reject) => {
            this.citasServiceClient
              .send('get_extremidades', {})
              .subscribe({
                next: (extremidades) => resolve(extremidades),
                error: (err) => reject(err),
              });
          });
        } catch (err) {
          throw err;
        }
      }
      async getDoctor() {
        try {
          return new Promise((resolve, reject) => {
            this.citasServiceClient
              .send('get_doctores', {})
              .subscribe({
                next: (doctores) => resolve(doctores),
                error: (err) => reject(err),
              });
          });
        } catch (err) {
          throw err;
        }
      }
      async getDoctorByEspecialidad() {
        try {
          return new Promise((resolve, reject) => {
            this.citasServiceClient
              .send('get_doctores_by_especialidad', {})
              .subscribe({
                next: (doctores) => resolve(doctores),
                error: (err) => reject(err),
              });
          });
        } catch (err) {
          throw err;
        }
      }
      async getHorarioAtencion() {
        try {
          return new Promise((resolve, reject) => {
            this.citasServiceClient
              .send('get_horario_atencion', {})
              .subscribe({
                next: (horarios) => resolve(horarios),
                error: (err) => reject(err),
              });
          });
        } catch (err) {
          throw err;
        }
      }
      async getCitas() {
        try {
          return new Promise((resolve, reject) => {
            this.citasServiceClient
              .send('get_citas', {})
              .subscribe({
                next: (citas) => resolve(citas),
                error: (err) => reject(err),
              });
          });
        } catch (err) {
          throw err;
        }
      }
      async getCitasPresenciales() {
        try {
          return new Promise((resolve, reject) => {
            this.citasServiceClient
              .send('get_cita_presencial', {})
              .subscribe({
                next: (citaPresencial) => resolve(citaPresencial),
                error: (err) => reject(err),
              });
          });
        } catch (err) {
          throw err;
        }
      }
      async getCitasVirtuales() {
        try {
          return new Promise((resolve, reject) => {
            this.citasServiceClient
              .send('get_cita_virtual', {})
              .subscribe({
                next: (citasVirtuales) => resolve(citasVirtuales),
                error: (err) => reject(err),
              });
          });
        } catch (err) {
          throw err;
        }
      }
      async createCitaMedicaPresencial() {
        try {
          return new Promise((resolve, reject) => {
            this.citasServiceClient
              .send('create_cita_presencial', {})
              .subscribe({
                next: (citaPresencial) => resolve(citaPresencial),
                error: (err) => reject(err),
              });
          });
        } catch (err) {
          throw err;
        }
      }
     
      async createCitaMedicaVirtual() {
        try {
          return new Promise((resolve, reject) => {
            this.citasServiceClient
              .send('create_cita_virtual', {})
              .subscribe({
                next: (citaVirtual) => resolve(citaVirtual),
                error: (err) => reject(err),
              });
          });
        } catch (err) {
          throw err;
        }
      }
}
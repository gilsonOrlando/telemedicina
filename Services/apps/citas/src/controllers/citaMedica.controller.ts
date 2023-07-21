import { Controller, Get, Post, Body } from '@nestjs/common';
import { CitaMedicaService } from '../services/citaMedica.service';
import { RmqService } from '@app/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller()
export class CitaMedicaController {
    constructor(
        private readonly citaMedicaService: CitaMedicaService,
        private readonly rmqService: RmqService,
        ) { }

    @EventPattern('get_doctores')
    async handleGetDoctores(@Payload() data: any, @Ctx() context: RmqContext) {
        const doctores = this.citaMedicaService.getDoctor();
        this.rmqService.ack(context);
        return doctores;
    }

    @EventPattern('get_doctores_by_especialidad')
    async handleGetDoctoresByEspecialidad(@Payload() data: any, @Ctx() context: RmqContext) {
        const doctores = this.citaMedicaService.getDoctorByEspecialidad(data.especialidad);
        this.rmqService.ack(context);
        return doctores;
    }

    @EventPattern('get_extremidades')
    async handleGetExtremidades(@Payload() data: any, @Ctx() context: RmqContext) {
        const extremidades = this.citaMedicaService.getExtremidades();
        this.rmqService.ack(context);
        return extremidades;
    }

    @EventPattern('get_horario_atencion')
    async handleGetHorarioAtencion(@Payload() data: any, @Ctx() context: RmqContext) {
        const horarioAtencion = this.citaMedicaService.getHorarioAtencion(data.doctor);
        this.rmqService.ack(context);
        return horarioAtencion;
    }
}
import { Controller, Get } from '@nestjs/common';
import { ConsultasService } from './consultas.service';
import { RmqService } from '@app/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller()
export class ConsultasController {
  constructor(
    private readonly consultasService: ConsultasService,
    private readonly rmqService: RmqService,
    ){}
    @EventPattern('get_publicidad')
    async handleGetPublicidad(@Payload() data: any, @Ctx() context: RmqContext) {
      const consultas = this.consultasService.getConsultas();
      this.rmqService.ack(context);
      return consultas;
    }
    @EventPattern('create_consultas')
    async handleCreateConsultas(@Payload() data: any, @Ctx() context: RmqContext) {
      const consultas = this.consultasService.createConsultas(data);
      this.rmqService.ack(context);
      return consultas;
    }
    @EventPattern('update_consultas')
    async handleUpdateConsultas(@Payload() data: any, @Ctx() context: RmqContext) {
    const consultas = this.consultasService.updateConsulta(data); 
    this.rmqService.ack(context);
    return consultas;
  }
}

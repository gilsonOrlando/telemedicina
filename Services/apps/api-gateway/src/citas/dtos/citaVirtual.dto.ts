import { PartialType } from '@nestjs/swagger';

export class createCitaMedicaVirtualDto {
    readonly malestar: string;
    readonly nombre: string;
    readonly zona_dolor: string;
    readonly sintomas: string[];
    readonly doctor: string;
    readonly fecha: Date;
    readonly tiempo_espera_aprox: number;
    readonly estado: string;
}

export class updateCitaMedicaVirtualDto extends PartialType(
  createCitaMedicaVirtualDto,
) {}

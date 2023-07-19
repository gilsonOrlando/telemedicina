import { PartialType } from '@nestjs/swagger'; 

export class createCitaMedicaPresencialDto {
    readonly malestar: string;
    readonly nombre: string;
    readonly zona_dolor: string;
    readonly sintomas: string[];
    readonly doctor: string;
    readonly fecha: Date;
    readonly lugar: string;
}

export class updateCitaMedicaPresencialDto extends PartialType(
  createCitaMedicaPresencialDto,
) {}

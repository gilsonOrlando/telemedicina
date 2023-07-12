import { PartialType } from '@nestjs/swagger';

export class createCitaMedicaVirtualDto {
  readonly especialidad: string;
  readonly diagnostico_presuntivo: string[];
  readonly recomendacion: string[];
  readonly fecha: Date;
  readonly tiempo_espera_aprox: number;
  readonly lugar: string;
}

export class updateCitaMedicaVirtualDto extends PartialType(
  createCitaMedicaVirtualDto,
) {}

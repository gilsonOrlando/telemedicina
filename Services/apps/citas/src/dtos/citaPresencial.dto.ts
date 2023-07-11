import { PartialType } from '@nestjs/swagger';

export class createCitaMedicaPresencialDto {
    readonly especialidad: string;
    readonly diagnostico_presuntivo: string[];
    readonly recomendacion: string[];
    readonly fecha: Date;
    readonly tiempo_espera_aprox: number;
    readonly lugar: string;
}

export class updateCitaMedicaPresencialDto extends PartialType(createCitaMedicaPresencialDto) { }

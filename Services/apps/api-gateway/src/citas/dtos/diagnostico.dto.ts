import { ApiProperty, PartialType } from '@nestjs/swagger';

export class createDiagnosticoDto {
    @ApiProperty({ description: "Enfermedad diagnosticada", example: "Dolor de cabeza" })
    enfermedad: string;
    @ApiProperty({ description: "Observaciones del doctor", example: "Dolor de cabeza" })
    observaciones: string;
    @ApiProperty({ description: "Recetas del doctor", example: ["Tomar paracetamol cada 8 horas"] })
    recetas: string[];
}

export class updateDiagnosticoDto extends PartialType(
    createDiagnosticoDto,
) { }
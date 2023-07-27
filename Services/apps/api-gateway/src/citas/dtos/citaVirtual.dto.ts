import { ApiProperty ,PartialType } from '@nestjs/swagger';

export class createCitaMedicaVirtualDto {
  @ApiProperty({description: "Descripción del malestar", example: "Dolor de cabeza"})
   malestar: string;
   @ApiProperty({description: "Nombre del malestar", example: "Informate sobre eventos de salud"})
   nombre: string;
   @ApiProperty({description: "Zona del malestar", example: "Cabeza"})
   zona_dolor: string;
    @ApiProperty({description: "Sintoma del malestar", example: "Dolor de cabeza"})
   sintomas: string[];
    @ApiProperty({description: "Doctor encargado", example: "Juan Perez"})
   doctor: string;
    @ApiProperty({description: "Fecha de la atencion", example: "2021-10-10"})
   fecha: Date;
    @ApiProperty({description: "Tiempo de espera aproximado", example: 10})
   tiempo_espera_aprox: number;
   @ApiProperty({description: "Estado de la cita", example: "Pendiente"})
   estado: string;
}

export class updateCitaMedicaVirtualDto extends PartialType(
  createCitaMedicaVirtualDto,
) {}

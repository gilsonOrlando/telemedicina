import { ApiProperty, PartialType } from '@nestjs/swagger'; 

export class createCitaMedicaPresencialDto {
  @ApiProperty({ description: 'Descripción del malestar', example: 'Informate sobre eventos de salud' })
  malestar: string;
  @ApiProperty({ description: 'Nombre del malestar', example: 'Informate sobre eventos de salud' })  
  nombre: string;
  @ApiProperty({ description: 'Zona del malestar', example: 'Informate sobre eventos de salud' })    
  zona_dolor: string;
  @ApiProperty({ description: 'Sintoma del malestar', example: 'Informate sobre eventos de salud' })      
  sintomas: string[];
  @ApiProperty({ description: 'Doctor encargado', example: 'Informate sobre eventos de salud' })        
  doctor: string;
  @ApiProperty({ description: 'Fecha de la atencion', example: 'Informate sobre eventos de salud' })          
  fecha: string;
  @ApiProperty({ description: 'Lugar de la atencion', example: 'Informate sobre eventos de salud' })          
  lugar: string;
}

export class updateCitaMedicaPresencialDto extends PartialType(
  createCitaMedicaPresencialDto,
) {}

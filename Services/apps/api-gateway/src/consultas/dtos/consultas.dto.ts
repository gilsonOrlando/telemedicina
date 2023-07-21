import { ApiProperty, PartialType } from '@nestjs/swagger';

export class ConsultasDto {
  
   @ApiProperty({ description: 'Descripción de la publicidad', example: 'Aprovecha nuestra oferta especial' })
  resultado: string;

  @ApiProperty({ description: 'URL de la imagen de la publicidad', example: 1 })
  tiempo_padecimiento: number;

  @ApiProperty({ description: 'URL de la imagen de la publicidad', example: 'https://ejemplo.com/imagen.jpg' })
  sintoma: string;

  // Otras propiedades y validaciones para el DTO
}

export class UpdateConsultasDto extends PartialType(ConsultasDto) {
  // Puedes agregar propiedades adicionales específicas para la actualización si es necesario
}

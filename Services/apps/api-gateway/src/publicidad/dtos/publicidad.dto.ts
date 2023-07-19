import { ApiProperty, PartialType } from '@nestjs/swagger';

export class PublicidadDto {
  @ApiProperty({ description: 'Descripción de la publicidad', example: 'Aprovecha nuestra oferta especial' })
  descripcion: string;

  @ApiProperty({ description: 'URL de la imagen de la publicidad', example: 'https://ejemplo.com/imagen.jpg' })
  imagen: string;

  // Otras propiedades y validaciones para el DTO
}

export class UpdatePublicidadDto extends PartialType(PublicidadDto) {
  // Puedes agregar propiedades adicionales específicas para la actualización si es necesario
}

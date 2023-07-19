import { ApiProperty, PartialType } from '@nestjs/swagger';

export class NoticiasDto {
  @ApiProperty({ description: 'Titulo de la noticia', example: 'Informate sobre eventos de salud' })
  titulo: string;

  @ApiProperty({ description: 'Descripcion de la noticia', example: 'Contexto de la noticia' })
  descripcion: string;

  @ApiProperty({ description: 'Fuente de la noticia', example: 'Veracidad de la noticia' })
  fuente: string;

  @ApiProperty({ description: 'URL de la imagen de la noticia', example: 'https://ejemplo.com/imagen.jpg' })
  imagen: string;

  @ApiProperty({ description: 'Tipo de noticia', example: 'Tipo de formato de la noticia' })
  tipo: string;

  // Otras propiedades y validaciones para el DTO
}
export class UpdateNoticiaDto extends PartialType(NoticiasDto) {
  // Puedes agregar propiedades adicionales específicas para la actualización si es necesario
}
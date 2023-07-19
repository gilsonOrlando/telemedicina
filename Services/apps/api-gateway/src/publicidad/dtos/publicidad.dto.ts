import { PartialType } from '@nestjs/swagger';
export class PublicidadDto {
    descripcion: string;
    imagen: string;
}
export class updatePublicidadDto extends PartialType(
    PublicidadDto,
  ) {}
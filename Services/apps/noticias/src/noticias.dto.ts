import { PartialType } from '@nestjs/swagger';

export class createNoticiaDto {
  readonly titulo: string;
  readonly descripcion: string;
  readonly fuente: string;
  readonly imagen: string;
  readonly tipo: string;
}

export class updateNoticiaDto extends PartialType(createNoticiaDto) {}

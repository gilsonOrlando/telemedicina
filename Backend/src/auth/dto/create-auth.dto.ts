import { User } from '../auth.entity';

export class CreateAuthDto {
    correo: string;
    contraseña: string;
}

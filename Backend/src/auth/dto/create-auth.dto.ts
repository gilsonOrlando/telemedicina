import { MaxLength, MinLength, IsEmail } from 'class-validator';

export class CreateAuthDto {
  @IsEmail()
  email: string;

  @MinLength(8)
  @MaxLength(12)
  password: string;
}

import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto.email, createAuthDto.password);
  }

  @Post('login')
  login(@Body() userObjectLogin: CreateAuthDto) {
    return this.authService.login(userObjectLogin);
  }
}

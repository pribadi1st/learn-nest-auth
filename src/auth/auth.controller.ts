import {
  Body,
  Controller,
  Post,
  Response,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async login(
    @Body(new ValidationPipe()) body: LoginDto,
    @Response({
      passthrough: true,
    })
    response,
  ) {
    const { user, accessToken } = await this.authService.login(body);
    response.set('Authorization', `Bearer ${accessToken}`);
    return user;
  }
}

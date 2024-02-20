import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async login(body: LoginDto) {
    const { password, ...user } = await this.userService.findByEmail(
      body.email,
    );

    const result = await compare(body.password, password);
    if (!result) {
      throw new UnauthorizedException('Invalid password');
    }
    const payload = { sub: user.id, username: user.email };
    return {
      user,
      accessToken: this.jwtService.sign(payload, {
        secret: 'secretKey',
        expiresIn: '60s',
      }),
    };
  }
}

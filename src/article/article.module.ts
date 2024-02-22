import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';

@Module({
  controllers: [ArticleController],
  providers: [
    ArticleService,
    AuthService,
    JwtService,
    UserService,
    PrismaService,
  ],
})
export class ArticleModule {}

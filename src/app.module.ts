import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { HeroController } from './hero/hero.controller';
import { HeroService } from './hero/hero.service';
import { UserModule } from './user/user.module';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, AuthModule, ArticleModule],
  controllers: [AppController, HeroController],
  providers: [AppService, HeroService],
})
export class AppModule {}

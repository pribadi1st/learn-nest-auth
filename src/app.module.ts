import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroController } from './hero/hero.controller';
import { HeroService } from './hero/hero.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule],
  controllers: [AppController, HeroController],
  providers: [AppService, HeroService],
})
export class AppModule {}

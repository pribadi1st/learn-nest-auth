import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}
  @Get()
  index() {
    return 'index hero';
  }

  @Get(':id')
  show(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.heroService.getSingleHero(id);
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }

  @Post()
  create(
    @Res({ passthrough: true }) response,
    @Body(new ValidationPipe()) createHeroDto: CreateHeroDto,
  ) {
    return this.heroService.createHero(createHeroDto);
  }
}

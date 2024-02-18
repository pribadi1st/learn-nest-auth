import { Controller, Get } from '@nestjs/common';

@Controller('hero')
export class HeroController {
  constructor() {}
  @Get()
  index() {
    return 'index hero';
  }
}

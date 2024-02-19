import { Injectable } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { Hero } from './type';
@Injectable()
export class HeroService {
  private heroes: Hero[] = [
    { id: 1, name: 'Spiderman', power: 'Spider web' },
    { id: 2, name: 'Superman', power: 'Laser eyes' },
    { id: 3, name: 'Batman', power: 'Rich' },
    { id: 4, name: 'Ironman', power: 'Rich' },
    { id: 5, name: 'Hulk', power: 'Strong' },
    { id: 6, name: 'Thor', power: 'God' },
    { id: 7, name: 'Flash', power: 'Fast' },
  ];

  public getSingleHero(id: number): Hero {
    const hero = this.heroes.findIndex((hero) => hero.id === id);
    if (hero === -1) {
      throw new Error('Hero not found');
    }
    return this.heroes[hero];
  }

  public createHero(hero: CreateHeroDto): Hero[] {
    this.heroes.push(hero);
    return this.heroes;
  }
}

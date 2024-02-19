import { IsAlpha, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateHeroDto {
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsAlpha()
  name: string;

  @IsString()
  power: string;
}

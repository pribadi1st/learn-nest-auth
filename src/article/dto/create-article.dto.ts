import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  body: string;

  @IsOptional()
  @IsBoolean()
  published: boolean;
}

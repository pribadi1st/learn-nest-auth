import { ConflictException, Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { PrismaService } from 'src/prisma.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable({ scope: Scope.REQUEST })
export class ArticleService {
  constructor(
    @Inject(REQUEST) private readonly request: Request,
    private prisma: PrismaService,
  ) {}

  async create(createArticleDto: CreateArticleDto) {
    const { user } = <any>this.request;

    const article = await this.prisma.article
      .create({
        data: {
          ...createArticleDto,
          authorId: user.sub,
        },
      })
      .catch((e) => {
        throw new ConflictException('Duplicated data');
      });
    return article;
    // return article;
  }

  findAll() {
    return `This action returns all article`;
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}

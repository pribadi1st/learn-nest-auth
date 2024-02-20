import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { hash } from 'bcrypt';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const newUser = await this.prisma.user.create({
        data: {
          ...createUserDto,
          password: await hash(createUserDto.password, 10),
        },
      });
      const { password, ...user } = newUser;
      return user;
    } catch (e) {
      if (e.code === 'P2002') {
        throw new ConflictException('User already exists');
      }
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  async findByEmail(email: string) {
    return await this.prisma.user
      .findUniqueOrThrow({
        where: {
          email: email,
        },
      })
      .catch((e) => {
        throw new NotFoundException(e.message);
      });
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

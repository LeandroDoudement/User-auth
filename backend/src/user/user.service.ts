import { Injectable, NotFoundException } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data: {
        age: data.age,
        email: data.email,
        fullname: data.fullname,
        gender: data.gender,
        password: data.password,
        phone: data.phone,
        termsOfService: data.termsOfService,
      },
    });
  }

  async findAll({ skip, take }: Prisma.UserFindManyArgs): Promise<User[]> {
    return this.prisma.user.findMany({
      skip,
      take,
    });
  }

  async findOne(id: number): Promise<User> {
    const result = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!result) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return result;
  }

  async update(id: number, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }

  async remove(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}

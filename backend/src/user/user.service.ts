import { Injectable, NotFoundException } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  mapFields(data) {
    return {
      age: data.age,
      email: data.email,
      fullname: data.fullname,
      gender: data.gender,
      password: data.password,
      phone: data.phone,
      termsOfService: data.termsOfService,
    };
  }

  sanitizeUser(user: User) {
    const sanitizedUser = { ...user };
    // Prisma does not support hiding fields, so we have to do it manually
    delete sanitizedUser.password;
    return sanitizedUser;
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data: this.mapFields(data),
    });
  }

  async findAll({
    where,
    skip,
    take,
  }: Prisma.UserFindManyArgs): Promise<ResultList<User>> {
    const users = await this.prisma.user.findMany({
      where,
      skip,
      take,
      orderBy: {
        id: 'asc',
      },
    });

    if (!users) throw new NotFoundException('Users not found');

    const sanitizedUsers = users.map((user) => this.sanitizeUser(user));
    const totalCount = await this.prisma.user.count({ where });

    return {
      totalCount,
      entries: sanitizedUsers,
    };
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

    return this.sanitizeUser(result);
  }

  async update(id: number, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({
      data: this.mapFields(data),
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

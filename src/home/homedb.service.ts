import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HomeDBService {
  constructor(private prisma: PrismaService) {}

  async getHome() {
    return this.prisma.home.findFirst();
  }

  async createHome(data: Prisma.HomeCreateInput) {
    return this.prisma.home.create({ data });
  }

  async updateHome(
    id: Prisma.HomeCreateInput['id'],
    data: Prisma.HomeUpdateInput,
  ) {
    return this.prisma.home.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteHome(id: string) {
    return this.prisma.home.delete({ where: { id } });
  }
}

import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class YearDBService {
  constructor(private prisma: PrismaService) {}

  async getYear() {
    return this.prisma.year.findMany({ include: { timeline: true } });
  }

  async createYear(data: Prisma.YearCreateInput) {
    return this.prisma.year.create({ data });
  }

  async updateYear(
    id: Prisma.YearCreateInput['id'],
    data: Prisma.YearUpdateInput,
  ) {
    return this.prisma.year.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteYear(id: string) {
    return this.prisma.year.delete({ where: { id } });
  }
}

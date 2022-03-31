import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AboutDBService {
  constructor(private prisma: PrismaService) {}

  async getAbout() {
    return this.prisma.about.findFirst();
  }

  async createAbout(data: Prisma.AboutCreateInput) {
    return this.prisma.about.create({ data });
  }

  async updateAbout(
    id: Prisma.AboutCreateInput['id'],
    data: Prisma.AboutUpdateInput,
  ) {
    return this.prisma.about.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteAbout(id: string) {
    return this.prisma.about.delete({ where: { id } });
  }
}

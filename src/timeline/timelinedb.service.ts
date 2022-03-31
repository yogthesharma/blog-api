import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TimelineDBService {
  constructor(private readonly prisma: PrismaService) {}

  async getTimeline() {
    return this.prisma.timeline.findMany();
  }

  async createTimeline(data: Prisma.TimelineCreateInput) {
    return this.prisma.timeline.create({
      data: { ...data, year: { connect: { id: data.year as string } } },
    });
  }

  async updateTimeline(
    id: Prisma.TimelineCreateInput['id'],
    data: Prisma.TimelineUpdateInput,
  ) {
    return this.prisma.timeline.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteTimeline(id: string) {
    return this.prisma.timeline.delete({ where: { id } });
  }
}

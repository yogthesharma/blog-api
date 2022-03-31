import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BlogDBService {
  constructor(private prisma: PrismaService) {}

  async getBlogs() {
    return this.prisma.blog.findMany({
      select: { title: true, subtitle: true, id: true },
    });
  }

  async getSingleBlog(id: Prisma.BlogCreateInput['id']) {
    return this.prisma.blog.findUnique({ where: { id } });
  }

  async getRecentBlogs(number: number) {
    return this.prisma.blog.findMany({ take: number });
  }

  async createBlog(data: Prisma.BlogCreateInput) {
    return this.prisma.blog.create({ data });
  }

  async updateBlog(
    id: Prisma.BlogCreateInput['id'],
    data: Prisma.BlogUpdateInput,
  ) {
    return this.prisma.blog.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteBlog(id: string) {
    return this.prisma.blog.delete({ where: { id } });
  }
}

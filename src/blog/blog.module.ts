import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { BlogDBService } from './blogdb.service';

@Module({
  controllers: [BlogController],
  providers: [PrismaService, BlogDBService, BlogService],
})
export class BlogModule {}

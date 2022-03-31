import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { query } from 'express';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}
  @Get()
  getBlogs() {
    return this.blogService.getBlog();
  }

  @Get('/:id')
  getSingleBlog(@Param() params: { id: string }) {
    const { id } = params;
    return this.blogService.getSingleBlog(id);
  }

  @Get()
  getRecentBlogs(@Query() query: { first: number }) {
    const { first } = query;
    return this.blogService.getRecentBlogs(first);
  }

  @Post()
  setBlog(@Body() body: Prisma.BlogCreateInput) {
    return this.blogService.setBlog(body);
  }

  @Put('/:id')
  updateBlog(
    @Param() params: { id: string },
    @Body() body: Prisma.BlogUpdateInput,
  ) {
    const { id } = params;
    return this.blogService.updateBlog(id, body);
  }

  @Delete('/:id')
  deleteBlog(@Param() params: { id: string }) {
    const { id } = params;
    return this.blogService.deleteBlog(id);
  }
}

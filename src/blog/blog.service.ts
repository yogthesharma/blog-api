import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { BlogDBService } from './blogdb.service';

@Injectable()
export class BlogService {
  constructor(private readonly blogDataQuery: BlogDBService) {}

  async getBlog() {
    try {
      const response = await this.blogDataQuery.getBlogs();
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error };
    }
  }

  async getSingleBlog(id: Prisma.BlogCreateInput['id']) {
    try {
      const response = await this.blogDataQuery.getSingleBlog(id);
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error };
    }
  }

  async getRecentBlogs(number: number) {
    try {
      const response = await this.blogDataQuery.getRecentBlogs(number);
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error };
    }
  }

  async setBlog(data: Prisma.BlogCreateInput) {
    try {
      const response = await this.blogDataQuery.createBlog(data);
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error };
    }
  }

  async updateBlog(id: string, data: Prisma.BlogUpdateInput) {
    try {
      const response = await this.blogDataQuery.updateBlog(id, data);
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error };
    }
  }

  async deleteBlog(id: string) {
    try {
      const response = await this.blogDataQuery.deleteBlog(id);
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error };
    }
  }
}

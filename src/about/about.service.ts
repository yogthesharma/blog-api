import { Injectable } from '@nestjs/common';
import { About, Prisma } from '@prisma/client';
import { AboutDBService } from './aboutdb.service';

@Injectable()
export class AboutService {
  constructor(private readonly aboutDataQuery: AboutDBService) {}

  async getAbout() {
    try {
      const response = await this.aboutDataQuery.getAbout();
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error };
    }
  }

  async setAbout(data: Prisma.AboutCreateInput) {
    try {
      const response = await this.aboutDataQuery.createAbout(data);
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error };
    }
  }

  async updateAbout(id: string, data: Prisma.AboutUpdateInput) {
    try {
      const response = await this.aboutDataQuery.updateAbout(id, data);
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error };
    }
  }

  async deleteAbout(id: string) {
    try {
      const response = await this.aboutDataQuery.deleteAbout(id);
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error };
    }
  }
}

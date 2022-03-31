import { Injectable } from '@nestjs/common';
import { Prisma, Year } from '@prisma/client';
import { YearDBService } from './yeardb.service';

@Injectable()
export class YearService {
  constructor(private readonly yearDataService: YearDBService) {}

  async getYears() {
    try {
      const response = await this.yearDataService.getYear();
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error };
    }
  }

  async createYear(data: Prisma.YearCreateInput) {
    try {
      const response = await this.yearDataService.createYear(data);
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error };
    }
  }

  async updateYear(
    id: Prisma.YearCreateInput['id'],
    data: Prisma.YearUpdateInput,
  ) {
    try {
      const response = await this.yearDataService.updateYear(id, data);
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error };
    }
  }

  async deleteYear(id: Prisma.YearCreateInput['id']) {
    try {
      const response = await this.yearDataService.deleteYear(id);
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error };
    }
  }
}

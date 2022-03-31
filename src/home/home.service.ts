import { Injectable } from '@nestjs/common';
import { Home, Prisma } from '@prisma/client';
import { HomeDBService } from './homedb.service';

@Injectable()
export class HomeService {
  constructor(private readonly homeDataQuery: HomeDBService) {}

  async getHome() {
    try {
      const response = await this.homeDataQuery.getHome();
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error };
    }
  }

  async setHome(data: Prisma.HomeCreateInput) {
    try {
      const response = await this.homeDataQuery.createHome(data);
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error };
    }
  }

  async updateHome(id: string, data: Prisma.HomeUpdateInput) {
    try {
      const response = await this.homeDataQuery.updateHome(id, data);
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error };
    }
  }

  async deleteHome(id: string) {
    try {
      const response = await this.homeDataQuery.deleteHome(id);
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error };
    }
  }
}

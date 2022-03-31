import { Injectable } from '@nestjs/common';
import { Prisma, Timeline } from '@prisma/client';
import { TimelineDBService } from './timelinedb.service';

@Injectable()
export class TimelineService {
  constructor(private readonly timelineDataService: TimelineDBService) {}

  async getTimeline() {
    try {
      const response = await this.timelineDataService.getTimeline();
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error };
    }
  }

  async setTimeline(data: Prisma.TimelineCreateInput) {
    try {
      const response = await this.timelineDataService.createTimeline(data);
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error };
    }
  }

  async updateTimeline(id: string, data: Prisma.TimelineUpdateInput) {
    try {
      const response = await this.timelineDataService.updateTimeline(id, data);
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error };
    }
  }

  async deleteTimeline(id: string) {
    try {
      const response = await this.timelineDataService.deleteTimeline(id);
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error };
    }
  }
}

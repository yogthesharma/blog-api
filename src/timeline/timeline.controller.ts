import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { TimelineService } from './timeline.service';

@Controller('timeline')
export class TimelineController {
  constructor(private readonly timelineService: TimelineService) {}

  @Get()
  getAbout() {
    return this.timelineService.getTimeline();
  }

  @Post()
  setAbout(@Body() body: Prisma.TimelineCreateInput) {
    return this.timelineService.setTimeline(body);
  }

  @Put('/:id')
  updateAbout(
    @Param() params: { id: string },
    @Body() body: Prisma.TimelineUpdateInput,
  ) {
    const { id } = params;
    return this.timelineService.updateTimeline(id, body);
  }

  @Delete('/:id')
  deleteAbout(@Param() params: { id: string }) {
    const { id } = params;
    return this.timelineService.deleteTimeline(id);
  }
}

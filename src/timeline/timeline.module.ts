import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TimelineController } from './timeline.controller';
import { TimelineService } from './timeline.service';
import { TimelineDBService } from './timelinedb.service';

@Module({
  controllers: [TimelineController],
  providers: [PrismaService, TimelineDBService, TimelineService],
})
export class TimelineModule {}

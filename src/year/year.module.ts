import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { YearController } from './year.controller';
import { YearService } from './year.service';
import { YearDBService } from './yeardb.service';

@Module({
  imports: [],
  controllers: [YearController],
  providers: [PrismaService, YearDBService, YearService],
})
export class YearModule {}

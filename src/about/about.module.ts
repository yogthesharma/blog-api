import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AboutController } from './about.controller';
import { AboutService } from './about.service';
import { AboutDBService } from './aboutdb.service';

@Module({
  imports: [],
  controllers: [AboutController],
  providers: [PrismaService, AboutDBService, AboutService],
})
export class AboutModule {}

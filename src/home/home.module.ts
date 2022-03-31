import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { HomeDBService } from './homedb.service';

@Module({
  controllers: [HomeController],
  providers: [PrismaService, HomeDBService, HomeService],
})
export class HomeModule {}

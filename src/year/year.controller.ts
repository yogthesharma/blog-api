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
import { YearService } from './year.service';

@Controller('year')
export class YearController {
  constructor(private readonly yearService: YearService) {}

  @Get()
  getYears() {
    return this.yearService.getYears();
  }

  @Post()
  createYear(@Body() body: Prisma.YearCreateInput) {
    return this.yearService.createYear(body);
  }

  @Put('/:id')
  updateAbout(
    @Param() params: { id: string },
    @Body() body: Prisma.YearUpdateInput,
  ) {
    const { id } = params;
    return this.yearService.updateYear(id, body);
  }

  @Delete('/:id')
  deleteYear(@Param() params: { id: string }) {
    const { id } = params;
    return this.yearService.deleteYear(id);
  }
}

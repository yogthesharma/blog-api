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
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}
  @Get()
  getAbout() {
    return this.homeService.getHome();
  }

  @Post()
  setHome(@Body() body: Prisma.HomeCreateInput) {
    return this.homeService.setHome(body);
  }

  @Put('/:id')
  updateHome(
    @Param() params: { id: string },
    @Body() body: Prisma.HomeUpdateInput,
  ) {
    const { id } = params;
    return this.homeService.updateHome(id, body);
  }

  @Delete('/:id')
  deleteHome(@Param() params: { id: string }) {
    const { id } = params;
    return this.homeService.deleteHome(id);
  }
}

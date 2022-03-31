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
import { AboutService } from './about.service';

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Get()
  getAbout() {
    return this.aboutService.getAbout();
  }

  @Post()
  setAbout(@Body() body: Prisma.AboutCreateInput) {
    return this.aboutService.setAbout(body);
  }

  @Put('/:id')
  updateAbout(
    @Param() params: { id: string },
    @Body() body: Prisma.AboutUpdateInput,
  ) {
    const { id } = params;
    return this.aboutService.updateAbout(id, body);
  }

  @Delete('/:id')
  deleteAbout(@Param() params: { id: string }) {
    const { id } = params;
    return this.aboutService.deleteAbout(id);
  }
}

import { Module } from '@nestjs/common';
import { AboutModule } from 'src/about/about.module';
import { BlogModule } from 'src/blog/blog.module';
import { HomeModule } from 'src/home/home.module';
import { TimelineModule } from 'src/timeline/timeline.module';
import { YearModule } from 'src/year/year.module';

@Module({
  imports: [AboutModule, YearModule, TimelineModule, HomeModule, BlogModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

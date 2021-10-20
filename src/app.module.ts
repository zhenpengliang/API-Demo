import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { RedirectController } from './redirect/redirect.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, RedirectController],
  providers: [AppService, CatsService],
})
export class AppModule {}

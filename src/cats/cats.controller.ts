import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  cats(): object {
    return ['cat1', 'cat2', 'cat3', 'cat4', 'cat5'];
  }
}

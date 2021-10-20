import { Controller, Get, Query } from '@nestjs/common';
import { CatsService } from './cats.service';
import {query} from "express";

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatsService) {}

  @Get()
  cats(): object {
    return this.catService.getCats();
  }

  @Get('cat')
  oneCat(@Query('name') name) : object {
   return  this.catService.getOneCat(name)
  }
}

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Movies } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/movies')
  getHello2(): Promise<Movies[]> {
    return this.appService.getMovies();
  }
}

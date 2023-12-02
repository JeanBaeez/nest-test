import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/movies')
  getHello2(): Promise<
    {
      MovieId: number;
      id: number;
      title: string;
      poster_path: string;
      backdrop_path: string;
      release_date: string;
      overview: string;
    }[]
  > {
    return this.appService.getMovies();
  }
}

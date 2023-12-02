import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  async getMovies() {
    const data = await this.prisma.movies.findMany({
      take: 1000,
    });
    return await data;
  }
}

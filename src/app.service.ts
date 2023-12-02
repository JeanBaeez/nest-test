import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class AppService extends PrismaClient {
  async getMovies() {
    const prisma = new PrismaClient();
    const data = await prisma.movies.findMany({
      take: 1000,
    });
    return await data;
  }
}

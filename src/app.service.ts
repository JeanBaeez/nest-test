import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class AppService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  async getMovies() {
    const prisma = new PrismaClient();
    const data = await prisma.movies.findMany({
      take: 1000,
    });
    return await data;
  }
}

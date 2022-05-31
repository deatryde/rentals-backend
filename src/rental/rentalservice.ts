import { CreateRentalDto } from './dto/create-rental.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RentalService {
  constructor(private prisma: PrismaService) {}
  getRentals(userId: number) {
    return this.prisma.rental.findMany({
      where: {
        userId,
      },
    });
  }

  async createRental(userId: number, dto: CreateRentalDto) {
    const bookmark = await this.prisma.rental.create({
      data: {
        userId,
        ...dto,
      },
    });
    return bookmark;
  }
}

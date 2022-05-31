import { RentalService } from './rentalservice';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { GetUser } from '../auth/decorator/get-user.decorator';
import { CreateRentalDto } from './dto';

@UseGuards(JwtGuard)
@Controller('rental')
export class RentalController {
  constructor(private rentalService: RentalService) {}

  @Get()
  getRentals(@GetUser('id') userId: number) {
    return this.rentalService.getRentals(userId);
  }

  @Post()
  createRental(@GetUser('id') userId: number, @Body() dto: CreateRentalDto) {
    return this.rentalService.createRental(userId, dto);
  }
}

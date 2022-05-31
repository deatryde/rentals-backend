import { Module } from '@nestjs/common';
import { RentalController } from './rental.controller';
import { RentalService } from './rentalservice';

@Module({
  controllers: [RentalController],
  providers: [RentalService],
})
export class RentalModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { RentalModule } from './rental/rent.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    AuthModule,
    RentalModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}

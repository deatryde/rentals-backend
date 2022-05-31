import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateRentalDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsNumber()
  @IsNotEmpty()
  size: number;

  @IsString()
  @IsNotEmpty()
  rooms: string;

  @IsNumber()
  @IsNotEmpty()
  rent: number;
}

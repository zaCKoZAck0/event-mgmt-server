import { PhoneNumber } from '@/interfaces/users.interface';
import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength, IsAlpha } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  public phone: PhoneNumber;

  @MinLength(3)
  @IsAlpha()
  public name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(9)
  @MaxLength(32)
  public password: string;
}

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(9)
  @MaxLength(32)
  public password: string;
}

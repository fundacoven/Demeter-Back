import {IsString, IsEmail, MinLength, MaxLength, IsEmpty } from 'class-validator';

export class CreateAdminDto {

  @IsString()
  @IsEmail()
  email: string;

  @MinLength(6)
  @IsString()
  password: string;

  @MinLength(4)
  @MaxLength(50)
  @IsString()
  first_name: string;

  @MinLength(4)
  @MaxLength(50)
  @IsString()
  second_name: string;

  @IsString()
  cedula?: string;

  @IsString()
  phone?: string;
}

import {IsString, IsEmail, MinLength, MaxLength } from 'class-validator';

export class CreateUserDto {


  @IsString()
  @IsEmail()
  email: string;

  @MinLength(6)
  @MaxLength(50)
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
  phone?: string;
}

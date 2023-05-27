import { IsString,IsEmail,MinLength,MaxLength } from "class-validator"

export class Logindto{
@IsString()
@IsEmail()
email:string

@MinLength(6)
@MaxLength(50)
@IsString()
password:string

}
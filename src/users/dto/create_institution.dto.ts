import {IsString, IsEmail, MinLength, MaxLength, IsEmpty, IsEnum } from 'class-validator';
import { ValidRoles } from 'src/shared/enums';


export class CreateInstitutionDto{


@IsEmail()
email:string

@IsString()
rif:string

@IsString()
state?: string;

@IsString()
municipality?: string;

@MaxLength(500)
@IsString()
description?: string;

@IsString()
institution_name?: string;

}
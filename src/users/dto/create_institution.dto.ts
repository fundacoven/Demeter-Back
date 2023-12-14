import {IsString, IsEmail, MaxLength } from 'class-validator';


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
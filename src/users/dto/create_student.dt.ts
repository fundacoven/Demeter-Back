import {IsString,IsNumber } from 'class-validator';


export class CreateStudentDto{

@IsString()
fullname: string;

@IsNumber()
age: number;

@IsString()
height: string;

@IsString()
weight: string;

@IsString()
cbi?: string;

@IsString()
institutionId:string

}
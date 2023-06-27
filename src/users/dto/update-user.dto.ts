import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { CreateInstitutionDto } from './create_institution.dto';
import { CreateStudentDto } from './create_student.dt';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
export class UpdateInstitutionDto extends PartialType(CreateInstitutionDto) {}
export class UpdateStudentDto extends PartialType(CreateStudentDto){}

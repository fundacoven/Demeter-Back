import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { CreateInstitutionDto } from './create_institution.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
export class UpdateInstitutionDto extends PartialType(CreateInstitutionDto) {}

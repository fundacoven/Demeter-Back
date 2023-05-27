import { PartialType } from '@nestjs/mapped-types';
import { CreatePerfilUserDto } from './create-perfil-user.dto';

export class UpdatePerfilUserDto extends PartialType(CreatePerfilUserDto) {}

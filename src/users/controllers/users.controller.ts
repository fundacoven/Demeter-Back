import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from '../services';
import { CreateUserDto, UpdateUserDto } from '../dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ValidRoles } from 'src/shared/enums';
import { Logindto } from 'src/auth/dto/login-perfil-user.dto';
import { CreateAdminDto } from '../dto/create_admin.dto';
import { CreateInstitutionDto } from '../dto/create_institution.dto';

@Controller('users')
export class UsersController {
 
  constructor(private readonly usersService: UsersService) {}

    @Post("auth/register")
    register(@Body() createUserDto: CreateUserDto) {
      return this.usersService.register(createUserDto);
    }

    @Post("auth/login")
    login(@Body() UserLogin: Logindto) {
      return this.usersService.login(UserLogin);
    }
  
    @Post("auth/assign_admin")
    createAdmin(@Body() AdminData:CreateAdminDto) {
      return this.usersService.create(AdminData);
    }

    @Post("auth/assign_institution")
    createInstitution(@Body() InstitutionData:CreateInstitutionDto) {
      return this.usersService.assignInstitution(InstitutionData);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
      return this.usersService.update({id}, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.usersService.delete({id});
    }
  }


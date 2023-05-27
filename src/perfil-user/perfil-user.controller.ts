import { Controller, Get, Post, Body, Patch, Param, Delete, SetMetadata } from '@nestjs/common';
import { PerfilUserService } from './perfil-user.service';
import { CreatePerfilUserDto } from './dto/create-perfil-user.dto';
import { UpdatePerfilUserDto } from './dto/update-perfil-user.dto';
import { Logindto } from './dto';
import { getUser } from '../decorators/get-user.decorator';
import { PerfilUserEntity } from './entities/perfil-user.entity';
import { Auth } from './auth/decorators/auth.decorator';
import { ValidRoles } from 'src/interfaces/valid-roles';

@Controller('auth')
export class PerfilUserController {
  constructor(private readonly perfilUserService: PerfilUserService) {}

  @Post("register")
  register(@Body() createPerfilUserDto: CreatePerfilUserDto) {
    return this.perfilUserService.register(createPerfilUserDto);
  }

  @Post("login")
  login(@Body() Loginuserdto:Logindto) {
    return this.perfilUserService.login(Loginuserdto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePerfilUserDto: UpdatePerfilUserDto) {
    return this.perfilUserService.update(+id, updatePerfilUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.perfilUserService.remove(+id);
  }

  
  @Get("private")
  //aqui pondras por el auth si es validRoles..admin o user los que trngan permiso de acceder a dicha ruta
  @Auth(ValidRoles.user)
  testingPrivateRoute(
    @getUser() user:PerfilUserEntity
  ){
    return {user,Headers}
  }
}

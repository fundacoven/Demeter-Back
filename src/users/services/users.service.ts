import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto} from '../dto';
import { UnauthorizedException,BadRequestException,InternalServerErrorException} from '@nestjs/common/exceptions';
import { BaseService } from 'src/shared/services';
import { UserEntity } from '../entities/user.entity';
import { UserRepository } from '../repositories';
import { Logindto } from 'src/auth/dto/login-perfil-user.dto';
import { JwtService } from '@nestjs/jwt';
import { CreateAdminDto } from '../dto/create_admin.dto';
import { CreateInstitutionDto } from '../dto/create_institution.dto';
import { InstitutionRepository } from '../repositories/institution.repositories';
import { InstitutionServices } from './institution.service';

@Injectable()
export class UsersService extends BaseService<UserEntity> {
  
  constructor(
    private jwtService: JwtService,
    private readonly userRepository: UserRepository,
    private readonly institutionServices: InstitutionServices,
    ){
    super(userRepository);
    }
    async register(createPerfilUserDto: CreateUserDto) {
      try {
        let { password, ...userDate } = createPerfilUserDto;
        const user = this.userRepository.create({
          ...userDate,
          password:bcrypt.hashSync(password,10)
        });
        await this.userRepository.save(user);
        delete user.password;
  
        return user;
      } catch (error) {
        this.HandleDBErrors(error);
      }
    }
  
    async login(LoginuserDto: Logindto) {
      const { password, email } = LoginuserDto;
      const user = await this.userRepository.findOne({
        where: { email },
        select: { email: true, password: true, id: true },
      });
      if (!user) {
        throw new UnauthorizedException('Credentials are not valid (email)');
      }
      if (!bcrypt.compareSync(password, user.password)) {
        throw new UnauthorizedException('Credentials are not valid (password)');
      }
      const payload = { email: user.email, id: user.id };
      delete user.password;
      return { ...user, token: await this.jwtService.signAsync(payload) };
    }
    async assignInstitution(data:CreateInstitutionDto){
      const{email}=data
      const user=await this.userRepository.findOne({where:{email}})
      if(!user)throw new BadRequestException("the user dont exist");
      const institution=this.institutionServices.createInstitution(data,user)
      if(!institution)throw new BadRequestException("check your properties");
      return {message:"successfully registered institution"}
    }
    private HandleDBErrors(error: any): never {
      if (error.code === '23505') {
        throw new BadRequestException(error.detail);
      }
      console.log(error);
      throw new InternalServerErrorException('Please Check server logs');
    }
}

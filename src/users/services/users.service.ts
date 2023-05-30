import { Injectable } from '@nestjs/common';
import bcrypt from "bcrypt"
import { CreateUserDto} from '../dto';
import { UnauthorizedException,BadRequestException,InternalServerErrorException} from '@nestjs/common/exceptions';
import { BaseService } from 'src/shared/services';
import { UserEntity } from '../entities/user.entity';
import { UserRepository } from '../repositories';
import { Logindto } from 'src/auth/dto/login-perfil-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService extends BaseService<UserEntity> {
  
  constructor(
    private jwtService: JwtService,
    private readonly userRepository: UserRepository
    ) {
    super(userRepository);
    }
    async register(createPerfilUserDto: CreateUserDto) {
      try {
        const { password, ...userDate } = createPerfilUserDto;
        const user = this.userRepository.create({
          ...userDate,
          password: bcrypt.hashSync(password, 10),
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
  
    private HandleDBErrors(error: any): never {
      if (error.code === '23505') {
        throw new BadRequestException(error.detail);
      }
      console.log(error);
      throw new InternalServerErrorException('Please Check server logs');
    }
}

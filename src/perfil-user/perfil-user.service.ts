import { BadRequestException,UnauthorizedException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePerfilUserDto,UpdatePerfilUserDto,Logindto } from "./dto";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PerfilUserEntity } from './entities/perfil-user.entity';
import * as bcrypt from "bcrypt"
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class PerfilUserService {

constructor(
private jwtService: JwtService,
@InjectRepository(PerfilUserEntity)
private readonly userRepository:Repository<PerfilUserEntity>
){}

 async register(createPerfilUserDto: CreatePerfilUserDto) {
   try {
    const {password,...userDate}=createPerfilUserDto
   const user= this.userRepository.create({
    ...userDate,
    password:bcrypt.hashSync(password,10)
   })
   await this.userRepository.save(user)
   delete user.password

   return user

   } catch (error) {
    this.HandleDBErrors(error)
   }
  }

  async login(LoginuserDto:Logindto) {
    const {password,email}=LoginuserDto
    const user=await this.userRepository.findOne({
      where:{email},
      select:{email:true,password:true,id:true}
    })
    if(!user){
      throw new UnauthorizedException("Credentials are not valid (email)")
    }
    if(!bcrypt.compareSync(password,user.password)){
      throw new UnauthorizedException("Credentials are not valid (password)")
    }
    const payload={email:user.email,id:user.id}
    delete user.password
    return {...user,token:await this.jwtService.signAsync(payload)}
  }

  findOne(id: number) {
    return `This action returns a #${id} perfilUser`;
  }

  update(id: number, updatePerfilUserDto: UpdatePerfilUserDto) {
    return `This action updates a #${id} perfilUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} perfilUser`;
  }

  private HandleDBErrors(error:any):never{
    if(error.code==="23505"){
      throw new BadRequestException(error.detail)
    }
    console.log(error)
    throw new InternalServerErrorException("Please Check server logs")
  }
}

import { Injectable,BadRequestException } from "@nestjs/common";
import { BaseService } from "src/shared/services";
import { InstitutionEntity } from "../modules/institution/institution.entity";
import { InstitutionRepository } from "../repositories/institution.repositories";
import { CreateInstitutionDto } from "../dto/create_institution.dto";
import { UserEntity } from "../entities/user.entity";


@Injectable()
export class InstitutionServices extends BaseService<InstitutionEntity> {

constructor(private readonly institutionRepository:InstitutionRepository){
super(institutionRepository)
}

async createInstitution(data:CreateInstitutionDto,user:UserEntity){
    delete data.email
    if(!user)throw new BadRequestException("the user dont exist");
    const institution=this.institutionRepository.create({...data,user})
    const finish=await this.institutionRepository.save(institution)
    if(!institution || !finish)throw new BadRequestException("check your properties");
  }
}
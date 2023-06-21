import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseRepository } from "src/shared/repositories";
import { Repository } from "typeorm";
import { InstitutionEntity } from "../modules/institution/institution.entity";

@Injectable()
export class InstitutionRepository extends BaseRepository<InstitutionEntity> {
  constructor(
    @InjectRepository(InstitutionEntity)
    private readonly institutionEntity: Repository<InstitutionEntity>,
  ) {
    super(institutionEntity);
  }
}

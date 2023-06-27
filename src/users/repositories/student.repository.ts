import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseRepository } from "src/shared/repositories";
import { Repository } from "typeorm";
import { StudentEntity } from "../entities/student.entity";

@Injectable()
export class StudentRepository extends BaseRepository<StudentEntity> {
  constructor(
    @InjectRepository(StudentEntity)
    private readonly studentEntity: Repository<StudentEntity>,
  ) {
    super(studentEntity);
  }
}
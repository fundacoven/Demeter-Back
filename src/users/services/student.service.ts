import { Injectable,BadRequestException} from "@nestjs/common";
import { BaseService } from "src/shared/services";
import { StudentRepository } from "../repositories/student.repository";
import { StudentEntity } from "../entities/student.entity";
import { CreateStudentDto } from "../dto/create_student.dt";
import { InstitutionServices } from "./institution.service";


@Injectable()
export class StudentServices extends BaseService<StudentEntity> {
constructor(
    private readonly studentRepository:StudentRepository,
    private readonly institutionServices:InstitutionServices
    ){

super(studentRepository)
}

async getStudentByInstitution(id:string){
const institution=await this.institutionServices.findOne({where:{id}})
if(!institution)throw new BadRequestException("this institution dont exist")
const students=this.studentRepository.findAll({where:{institution:{id}}})
return students
}

async createStudent(student:CreateStudentDto){
const{institutionId,...dataStudent}=student
const institution=await this.institutionServices.findOne({where:{id:institutionId}})
if(!institution)throw new BadRequestException("this institution dont exist")
const newStudent=this.studentRepository.create({...dataStudent,institution})
if(!newStudent)throw new BadRequestException("student data error")
await this.studentRepository.save(newStudent)
return newStudent
}


}

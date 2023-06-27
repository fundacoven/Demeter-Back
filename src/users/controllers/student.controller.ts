import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
import { StudentServices } from "../services/student.service";
import { CreateStudentDto } from '../dto/create_student.dt';

@Controller('students')
export class StudentController {
constructor(private readonly StudentServices:StudentServices){}

@Post("institution")
createStudent(@Body() student:CreateStudentDto){
return  this.StudentServices.createStudent(student)
}


@Get('institution/:id')
findAllbyInstitution(@Param('id') id: string) {
  return this.StudentServices.getStudentByInstitution(id);
}

@Get(':id')
findOne(@Param('id') id: string) {
  return this.StudentServices.findOneBy({id});
}

@Patch(':id')
update(@Param('id') id: string, @Body() updateUserDto: any) {
  return this.StudentServices.update({id}, updateUserDto);
}

@Delete(':id')
remove(@Param('id') id: string) {
  return this.StudentServices.delete({id});
}

}
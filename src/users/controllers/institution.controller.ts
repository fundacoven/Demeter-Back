import { InstitutionServices } from '../services/institution.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

@Controller('institution')
export class InstitutionController {
  constructor(private readonly InstitutionServices: InstitutionServices) {}

  @Get()
  findAll() {
    return this.InstitutionServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.InstitutionServices.findOneBy({ id });
  }

  @Patch(':id')
  updateInstitution(@Param('id') id: string, @Body() updateUserDto: any) {
    return this.InstitutionServices.update({ id }, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.InstitutionServices.delete({ id });
  }
}

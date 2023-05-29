import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateOrchardDto, UpdateOrchardDto } from '../dto';
import { OrchardsService } from '../services';

@Controller('orchards')
export class OrchardsController {
  constructor(private readonly orchardsService: OrchardsService) {}

  @Post()
  create(@Body() createOrchardDto: CreateOrchardDto) {
    return this.orchardsService.create(createOrchardDto);
  }

  @Get()
  findAll() {
    return this.orchardsService.findAll();
  }

  @Get(':id')
  findOneBy(@Param('id') id: string) {
    return this.orchardsService.findOneBy({ id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrchardDto: UpdateOrchardDto) {
    return this.orchardsService.update({ id }, updateOrchardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orchardsService.delete({ id });
  }
}

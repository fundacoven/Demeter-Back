import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrchardsService } from './orchards.service';
import { CreateOrchardDto } from './dto/create-orchard.dto';
import { UpdateOrchardDto } from './dto/update-orchard.dto';

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
  findOne(@Param('id') id: string) {
    return this.orchardsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrchardDto: UpdateOrchardDto) {
    return this.orchardsService.update(+id, updateOrchardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orchardsService.remove(+id);
  }
}

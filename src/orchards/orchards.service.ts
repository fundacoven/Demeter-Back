import { Injectable } from '@nestjs/common';
import { CreateOrchardDto } from './dto/create-orchard.dto';
import { UpdateOrchardDto } from './dto/update-orchard.dto';

@Injectable()
export class OrchardsService {
  create(createOrchardDto: CreateOrchardDto) {
    return 'This action adds a new orchard';
  }

  findAll() {
    return `This action returns all orchards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orchard`;
  }

  update(id: number, updateOrchardDto: UpdateOrchardDto) {
    return `This action updates a #${id} orchard`;
  }

  remove(id: number) {
    return `This action removes a #${id} orchard`;
  }
}

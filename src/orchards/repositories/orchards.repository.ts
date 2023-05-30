import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrchardEntity } from '../entities';
import { BaseRepository } from 'src/shared/repositories';

@Injectable()
export class OrchardsRepository extends BaseRepository<OrchardEntity> {
  constructor(
    @InjectRepository(OrchardEntity)
    private readonly orchadEntity: Repository<OrchardEntity>,
  ) {
    super(orchadEntity);
  }
}

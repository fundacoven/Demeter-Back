import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/services';
import { OrchardEntity } from '../entities';
import { OrchardsRepository } from '../repositories';

@Injectable()
export class OrchardsService extends BaseService<OrchardEntity> {
  constructor(private readonly orchadRepository: OrchardsRepository) {
    super(orchadRepository);
  }
}

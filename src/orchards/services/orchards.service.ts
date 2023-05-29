import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/services';
import { OrchardEntity } from '../entities';
import { OrchardRepository } from '../repositories';

@Injectable()
export class OrchardsService extends BaseService<OrchardEntity> {
  constructor(private readonly orchadRepository: OrchardRepository) {
    super(orchadRepository);
  }
}

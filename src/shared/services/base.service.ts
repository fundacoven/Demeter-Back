import {
  BaseEntity,
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
} from 'typeorm';
import { IBaseRepository, IBaseService } from '../interfaces';

export abstract class BaseService<Entity extends BaseEntity>
  implements IBaseService<Entity>
{
  constructor(private readonly repository: IBaseRepository<Entity>) {}

  public async create(data: DeepPartial<Entity>): Promise<Entity> {
    return this.repository.create(data);
  }

  public async createMany(data: DeepPartial<Entity>[]): Promise<Entity[]> {
    return this.repository.createMany(data);
  }

  public async save(data: DeepPartial<Entity>): Promise<Entity> {
    return await this.repository.save(data);
  }

  public async saveMany(data: DeepPartial<Entity>[]): Promise<Entity[]> {
    return await this.repository.saveMany(data);
  }

  public async findOneBy(
    filterCondition: FindOptionsWhere<Entity>,
  ): Promise<Entity> {
    return await this.repository.findOneBy(filterCondition);
  }

  public async findOne(
    filterCondition: FindOneOptions<Entity>,
  ): Promise<Entity> {
    return await this.repository.findOne(filterCondition);
  }

  public async findAll(options?: FindManyOptions<Entity>): Promise<Entity[]> {
    return await this.repository.findAll(options);
  }

  public async remove(data: Entity): Promise<Entity> {
    return await this.repository.remove(data);
  }

  public async delete(options: FindOptionsWhere<Entity>) {
    return await this.repository.delete(options);
  }

  public async findWithRelations(
    relations: FindManyOptions<Entity>,
  ): Promise<Entity[]> {
    return await this.repository.findWithRelations(relations);
  }

  public async preload(entityLike: DeepPartial<Entity>): Promise<Entity> {
    return await this.repository.preload(entityLike);
  }
}

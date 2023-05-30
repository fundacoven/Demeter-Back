import {
  BaseEntity,
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { IBaseRepository } from '../interfaces';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class BaseRepository<Entity extends BaseEntity>
  implements IBaseRepository<Entity>
{
  protected constructor(private readonly entity: Repository<Entity>) {}

  public async save(data: DeepPartial<Entity>): Promise<Entity> {
    return await this.entity.save(data);
  }
  public async saveMany(data: DeepPartial<Entity>[]): Promise<Entity[]> {
    return await this.entity.save(data);
  }
  public create(data: DeepPartial<Entity>): Entity {
    return this.entity.create(data);
  }
  public createMany(data: DeepPartial<Entity>[]): Entity[] {
    return this.entity.create(data);
  }

  public async findOneBy(options: FindOptionsWhere<Entity>): Promise<Entity> {
    return await this.entity.findOneBy(options);
  }

  public async findOne(
    filterCondition: FindOneOptions<Entity>,
  ): Promise<Entity> {
    return await this.entity.findOne(filterCondition);
  }

  public async findWithRelations(
    relations: FindManyOptions<Entity>,
  ): Promise<Entity[]> {
    return await this.entity.find(relations);
  }

  public async findAll(options?: FindManyOptions<Entity>): Promise<Entity[]> {
    return await this.entity.find(options);
  }

  public async remove(data: Entity): Promise<Entity> {
    return await this.entity.remove(data);
  }

  public async update(
    criteria: FindOptionsWhere<Entity>,
    partialEntity: QueryDeepPartialEntity<Entity>,
  ) {
    return await this.entity.update(criteria, partialEntity);
  }

  public async delete(options: FindOptionsWhere<Entity>) {
    return await this.entity.delete(options);
  }

  public async preload(entityLike: DeepPartial<Entity>): Promise<Entity> {
    return await this.entity.preload(entityLike);
  }
}

import {
  BaseEntity,
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
} from 'typeorm';

export interface IBaseService<Entity extends BaseEntity> {
  create(data: DeepPartial<Entity>): Promise<Entity>;
  createMany(data: DeepPartial<Entity>[]): Promise<Entity[]>;
  save(data: DeepPartial<Entity>): Promise<Entity>;
  saveMany(data: DeepPartial<Entity>[]): Promise<Entity[]>;
  findOneBy(filterCondition: FindOptionsWhere<Entity>): Promise<Entity>;
  findOne(filterCondition: FindOneOptions<Entity>): Promise<Entity>;
  findAll(options?: FindManyOptions<Entity>): Promise<Entity[]>;
  remove(data: Entity): Promise<Entity>;
  findWithRelations(relations: FindManyOptions<Entity>): Promise<Entity[]>;
  preload(entityLike: DeepPartial<Entity>): Promise<Entity>;
}

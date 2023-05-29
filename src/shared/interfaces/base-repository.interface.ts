import {
  BaseEntity,
  DeepPartial,
  DeleteResult,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
} from 'typeorm';

export interface IBaseRepository<Entity extends BaseEntity> {
  create(data: DeepPartial<Entity>): Entity;
  createMany(data: DeepPartial<Entity>[]): Entity[];
  save(data: DeepPartial<Entity>): Promise<Entity>;
  saveMany(data: DeepPartial<Entity>[]): Promise<Entity[]>;
  findOneBy(filterCondition: FindOptionsWhere<Entity>): Promise<Entity>;
  findOne(filterCondition: FindOneOptions<Entity>): Promise<Entity>;
  findAll(options?: FindManyOptions<Entity>): Promise<Entity[]>;
  remove(data: Entity): Promise<Entity>;
  delete(options: FindOptionsWhere<Entity>): Promise<DeleteResult>;
  findWithRelations(relations: FindManyOptions<Entity>): Promise<Entity[]>;
  preload(entityLike: DeepPartial<Entity>): Promise<Entity>;
}

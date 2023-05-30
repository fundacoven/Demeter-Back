import {
  BaseEntity,
  DeepPartial,
  DeleteResult,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  UpdateResult,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export interface IBaseRepository<Entity extends BaseEntity> {
  create(data: DeepPartial<Entity>): Entity;
  createMany(data: DeepPartial<Entity>[]): Entity[];
  save(data: DeepPartial<Entity>): Promise<Entity>;
  saveMany(data: DeepPartial<Entity>[]): Promise<Entity[]>;
  findOneBy(filterCondition: FindOptionsWhere<Entity>): Promise<Entity>;
  findOne(filterCondition: FindOneOptions<Entity>): Promise<Entity>;
  findAll(options?: FindManyOptions<Entity>): Promise<Entity[]>;
  update(
    criteria: FindOptionsWhere<Entity>,
    partialEntity: QueryDeepPartialEntity<Entity>,
  ): Promise<UpdateResult>;
  remove(data: Entity): Promise<Entity>;
  delete(options: any): Promise<DeleteResult>;
  findWithRelations(relations: FindManyOptions<Entity>): Promise<Entity[]>;
  preload(entityLike: DeepPartial<Entity>): Promise<Entity>;
}

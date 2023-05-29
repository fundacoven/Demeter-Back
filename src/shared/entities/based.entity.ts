import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  BaseEntity as TypeormBaseEntity,
} from 'typeorm';

@Entity()
export class BasedEntity extends TypeormBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @CreateDateColumn({ select: false })
  createdAt?: Date;
  @UpdateDateColumn({ select: false })
  updatedAt?: Date;
}

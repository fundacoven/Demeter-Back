import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  BaseEntity,
} from 'typeorm';

@Entity()
export class BasedEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @CreateDateColumn({ select: false })
  createdAt?: Date;
  @UpdateDateColumn({ select: false })
  updatedAt?: Date;
}

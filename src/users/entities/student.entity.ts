import { BasedEntity } from 'src/shared/entities';
import { Entity, Column, ManyToOne } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity({ name: 'students' })
export class StudentEntity extends BasedEntity {
  @Column('text')
  fullname: string;

  @Column('numeric')
  age: number;

  @Column('text')
  height: string;

  @Column('text')
  weight: string;

  @Column('text', { nullable: true })
  cbi?: string;

  @ManyToOne(() => UserEntity, (user) => user.students)
  user: UserEntity;
}

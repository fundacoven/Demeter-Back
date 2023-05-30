import { BasedEntity } from 'src/shared/entities';
import { Entity, Column, ManyToOne } from 'typeorm';
import { InstitutionEntity } from '../modules/institution/institution.entity';

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

  @ManyToOne(() => InstitutionEntity, (institution) => institution.students)
  institution: InstitutionEntity;
}

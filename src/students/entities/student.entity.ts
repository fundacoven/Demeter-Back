import { PerfilUserEntity } from 'src/perfil-user/entities/perfil-user.entity';
import { BasedEntity } from 'src/shared/based.entity';
import { Entity, Column, ManyToOne, BeforeInsert } from 'typeorm';

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

  @ManyToOne(() => PerfilUserEntity, (user) => user.students)
  user: PerfilUserEntity;
}

import { NoticeEntity } from 'src/notices/entities/notice.entity';
import { OrchardEntity } from 'src/orchards/entities/orchard.entity';
import { BasedEntity } from 'src/shared/entities';
import { StudentEntity } from './student.entity';
import { Entity, Column, OneToMany } from 'typeorm';

@Entity("users")
export class UserEntity extends BasedEntity {
  @Column('text', { unique: true })
  email: string;

  @Column('text')
  password: string;

  @Column('text')
  first_name: string;

  @Column('text')
  second_name: string;

  @Column('text', {
    nullable: true,
    default: 'https://fundacoven.org/wp-content/uploads/2020/08/Logo-Azul.jpg',
  })
  perfil_photo_url?: string;

  @Column('text', { nullable: true })
  phone?: string;

  @Column('text', { array: true, default: ['user'] })
  roles: string[];

}

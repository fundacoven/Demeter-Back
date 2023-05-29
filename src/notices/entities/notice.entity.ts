import { BasedEntity } from 'src/shared/entities';
import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { NoticeCategoryEntity } from './notice-category.entity';
import { NoticeImageEntity } from './notice-image.entity';
import { UserEntity } from 'src/users/entities/user.entity';

@Entity({ name: 'notices' })
export class NoticeEntity extends BasedEntity {
  @Column('text')
  title: string;

  @Column('text')
  description: string;

  @Column('bool', { default: false })
  check_admin: boolean;

  @OneToMany(() => NoticeCategoryEntity, (category) => category.notice)
  categories: NoticeCategoryEntity[];

  @OneToMany(() => NoticeImageEntity, (image) => image.notice)
  images: NoticeImageEntity[];

  @ManyToOne(() => UserEntity, (user) => user.notices)
  user: UserEntity;
}

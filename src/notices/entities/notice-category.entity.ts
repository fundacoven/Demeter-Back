import { BasedEntity } from 'src/shared/entities';
import { Entity, Column, ManyToOne } from 'typeorm';
import { NoticeEntity } from './notice.entity';

@Entity({ name: 'notices_categories' })
export class NoticeCategoryEntity extends BasedEntity {
  @Column('text')
  name: string;

  @ManyToOne(() => NoticeEntity, (notice) => notice.categories)
  notice: NoticeEntity;
}

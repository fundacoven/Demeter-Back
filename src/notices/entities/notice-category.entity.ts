import { BasedEntity } from 'src/shared/based.entity';
import { Entity, Column, ManyToOne } from 'typeorm';
import { NoticeEntity } from './notice.entity';

@Entity({ name: 'notices_categories' })
export class NoticeCategoryEntity extends BasedEntity {
  @Column('text')
  name: string;

  @ManyToOne(() => NoticeEntity, (notice) => notice.categories)
  notice: NoticeEntity;
}

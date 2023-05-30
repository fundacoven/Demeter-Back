import { BasedEntity } from 'src/shared/based.entity';
import { Entity, Column, ManyToOne } from 'typeorm';
import { NoticeEntity } from './notice.entity';

@Entity({ name: 'notices_images' })
export class NoticeImageEntity extends BasedEntity {
  @Column('text')
  url: string;

  @ManyToOne(() => NoticeEntity, (notice) => notice.images)
  notice: NoticeEntity;
}

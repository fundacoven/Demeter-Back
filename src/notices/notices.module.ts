import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoticesService } from './services';
import { NoticesController } from './controllers';
import {
  NoticeCategoryEntity,
  NoticeEntity,
  NoticeImageEntity,
} from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      NoticeEntity,
      NoticeCategoryEntity,
      NoticeImageEntity,
    ]),
  ],
  controllers: [NoticesController],
  providers: [NoticesService],
  exports: [NoticesService],
})
export class NoticesModule {}

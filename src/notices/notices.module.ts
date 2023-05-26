import { Module } from '@nestjs/common';
import { NoticesService } from './notices.service';
import { NoticesController } from './notices.controller';
import {TypeOrmModule} from "@nestjs/typeorm"
import { NoticeEntity } from './entities/notice.entity';
import { NoticesCategoriesEntity } from './entities/notices-categories.entity';

@Module({
  controllers: [NoticesController],
  providers: [NoticesService],
  imports:[TypeOrmModule.forFeature([NoticeEntity,NoticesCategoriesEntity])]
})
export class NoticesModule {}

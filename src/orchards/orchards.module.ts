import { Module } from '@nestjs/common';
import { OrchardsService } from './orchards.service';
import { OrchardsController } from './orchards.controller';
import { OrchardEntity } from './entities/orchard.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlantCategoriesEntity } from './entities/plant-categories.entity';

@Module({
  controllers: [OrchardsController],
  providers: [OrchardsService],
  imports:[TypeOrmModule.forFeature([OrchardEntity,PlantCategoriesEntity])]
})
export class OrchardsModule {}

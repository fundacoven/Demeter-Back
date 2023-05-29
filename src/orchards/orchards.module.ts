import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrchardsService } from './services/orchards.service';
import { OrchardsController } from './controllers';
import { OrchardEntity } from './entities/orchard.entity';
import { PlantCategoriesEntity } from './entities/plant.entity';

@Module({
  controllers: [OrchardsController],
  providers: [OrchardsService],
  imports: [TypeOrmModule.forFeature([OrchardEntity, PlantCategoriesEntity])],
})
export class OrchardsModule {}

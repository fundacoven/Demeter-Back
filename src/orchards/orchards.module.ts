import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrchardsService } from './services';
import { OrchardsController } from './controllers';
import { OrchardEntity, PlantEntity } from './entities';
import { OrchardsRepository } from './repositories';

@Module({
  imports: [TypeOrmModule.forFeature([OrchardEntity, PlantEntity])],
  controllers: [OrchardsController],
  providers: [OrchardsService, OrchardsRepository],
  exports: [OrchardsService],
})
export class OrchardsModule {}

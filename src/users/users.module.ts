import { Module } from '@nestjs/common';
import { UsersService } from './services';
import { UsersController } from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './modules/admin/admin.entity';
import { InstitutionEntity } from './modules/institution/institution.entity';
import { UserEntity } from './entities/user.entity';
import { StudentEntity } from './entities/student.entity';
import { UserRepository } from './repositories';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { AuthModule } from 'src/auth/auth.module';
import { TaxpayersEntity } from './modules/taxpayers/taxpayers.entity';

@Module({
  controllers: [UsersController],
  imports:[TypeOrmModule.forFeature([AdminEntity,InstitutionEntity,UserEntity,StudentEntity,TaxpayersEntity]),AuthModule],
  providers: [UsersService,UserRepository,AuthGuard],
  exports: [UsersService],
})
export class UsersModule {}

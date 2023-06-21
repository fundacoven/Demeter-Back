import { Module } from '@nestjs/common';
import { UsersService } from './services';
import { UsersController } from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './modules/admin/admin.entity';
import { InstitutionEntity } from './modules/institution/institution.entity';
import { UserEntity } from './entities/user.entity';
import { StudentEntity } from './entities/student.entity';
import { UserRepository } from './repositories';
import { AuthModule } from 'src/auth/auth.module';
import { TaxpayersEntity } from './modules/taxpayers/taxpayers.entity';
import { InstitutionController } from './controllers/institution.controller';
import { InstitutionRepository } from './repositories/institution.repositories';
import { InstitutionServices } from './services/institution.service';


@Module({
  controllers: [UsersController, InstitutionController],
  imports:[TypeOrmModule.forFeature([AdminEntity,InstitutionEntity,UserEntity,StudentEntity,TaxpayersEntity]),
  AuthModule
  ],
  providers: [UsersService,UserRepository,InstitutionServices,InstitutionRepository],
  exports: [UsersService],
})
export class UsersModule {}

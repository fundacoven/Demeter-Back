import { Module } from '@nestjs/common';
import { UsersService } from './services';
import { UsersController } from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './modules/admin/admin.entity';
import { InstitutionEntity } from './modules/institution/institution.entity';
import { UserEntity } from './entities/user.entity';
import { StudentEntity } from './entities/student.entity';

@Module({
  controllers: [UsersController],
  imports:[TypeOrmModule.forFeature([AdminEntity,InstitutionEntity,UserEntity,StudentEntity])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

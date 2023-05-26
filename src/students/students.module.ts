import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import {TypeOrmModule} from "@nestjs/typeorm"
import { StudentEntity } from './entities/student.entity';
import { AuthGuard } from 'src/perfil-user/auth/auth.guard';
import { PerfilUserModule } from 'src/perfil-user/perfil-user.module';
import { JwtModule } from '@nestjs/jwt';
import { PerfilUserEntity } from 'src/perfil-user/entities/perfil-user.entity';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService,AuthGuard],
  imports:[TypeOrmModule.forFeature([StudentEntity,PerfilUserEntity]),JwtModule]
})
export class StudentsModule {}

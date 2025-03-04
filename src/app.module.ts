import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/envConfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerfilUserModule } from './perfil-user/perfil-user.module';
import { StudentsModule } from './students/students.module';
import { NoticesModule } from './notices/notices.module';
import { OrchardsModule } from './orchards/orchards.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load:[EnvConfiguration]
  }),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    autoLoadEntities: true,
    synchronize: true,
  }),
  PerfilUserModule,
  StudentsModule,
  NoticesModule,
  OrchardsModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}

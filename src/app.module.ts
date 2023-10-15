import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/envConfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppModules } from './modules';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [EnvConfiguration],
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
    ...AppModules,
  ],
  controllers: [HelloController],
  providers: [HelloService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { PerfilUserService } from './perfil-user.service';
import { PerfilUserController } from './perfil-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/perfil-user.entity';
import { RecoveryPasswordEntity } from './entities/recovery-password';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from '../auth/guards/auth.guard';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  controllers: [PerfilUserController],
  providers: [PerfilUserService, AuthGuard],
  imports: [
    TypeOrmModule.forFeature([UserEntity, RecoveryPasswordEntity]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        global: true,
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: '2h' },
      }),
    }),
  ],
  exports: [PerfilUserModule, JwtModule, AuthGuard],
})
export class PerfilUserModule {}

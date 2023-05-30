import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule,ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity} from 'src/users/entities/user.entity';
import { RecoveryPasswordEntity } from './entities/recovery-password.entity';

@Module({

    imports:[
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
    ]
})
export class AuthModule {}

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule,ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity} from 'src/users/entities/user.entity';
import { RecoveryPasswordEntity } from './entities/recovery-password.entity';
import { AuthGuard } from './guards/auth.guard';

@Module({
    providers:[AuthGuard],
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
    ],
    exports:[JwtModule,AuthModule,AuthGuard]
})
export class AuthModule {}

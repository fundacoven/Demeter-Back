import { Module } from '@nestjs/common';
import { UsersService } from './services';
import { UsersController } from './controllers';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

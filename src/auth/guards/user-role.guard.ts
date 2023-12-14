import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { UserEntity } from '../../users/entities/user.entity';

@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ValidRoles: string[] = this.reflector.get(
      'roles',
      context.getHandler(),
    );

    if (!ValidRoles) return true;
    if (ValidRoles.length === 0) return true;

    const req = context.switchToHttp().getRequest();
    const user = req.user as UserEntity;

    if (!user) throw new BadRequestException('User not found');

    for (const role of user.roles) {
      if (ValidRoles.includes(role)) {
        return true;
      }
    }
    throw new ForbiddenException();
  }
}

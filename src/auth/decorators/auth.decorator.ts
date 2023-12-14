import { UseGuards, applyDecorators } from '@nestjs/common';
import { ValidRoles } from 'src/shared/enums';
import { RoleProtected } from './role-protected.decorator';
import { AuthGuard } from '../guards/auth.guard';
import { UserRoleGuard } from '../guards/user-role.guard';

export function Auth(...roles: ValidRoles[]) {
  return applyDecorators(
    RoleProtected(...roles),
    UseGuards(AuthGuard, UserRoleGuard),
  );
}

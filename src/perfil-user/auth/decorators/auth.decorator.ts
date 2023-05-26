import { UseGuards, applyDecorators } from "@nestjs/common";
import { ValidRoles } from "src/interfaces/valid-roles";
import { RoleProtected } from "./role-protected.decorator";
import { AuthGuard } from "../auth.guard";
import { UserRoleGuard } from "./user-role.guard";



export function Auth(...roles:ValidRoles[]){
    return applyDecorators(
        RoleProtected(...roles),
        UseGuards(AuthGuard,UserRoleGuard)
    )
}
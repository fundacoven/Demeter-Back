import { BasedEntity } from "src/shared/entities";
import { UserEntity } from "src/users/entities/user.entity";
import { Column, Entity,OneToOne,JoinColumn } from "typeorm";

@Entity({name:"admins"})
export class AdminEntity extends BasedEntity{

@OneToOne(()=>UserEntity)
@JoinColumn()
user:UserEntity

}
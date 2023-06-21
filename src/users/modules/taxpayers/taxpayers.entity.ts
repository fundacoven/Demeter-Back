import { BasedEntity } from "src/shared/entities";
import { UserEntity } from "src/users/entities/user.entity";
import { Entity,OneToOne,JoinColumn } from "typeorm";

@Entity({name:"taxpayers"})
export class TaxpayersEntity extends BasedEntity{
    @OneToOne(()=>UserEntity)
    @JoinColumn()
    user:UserEntity
}
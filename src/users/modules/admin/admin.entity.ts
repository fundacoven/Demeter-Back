import { BasedEntity } from "src/shared/entities";
import { Column, Entity } from "typeorm";

@Entity({name:"admins"})
export class AdminEntity extends BasedEntity{

@Column("text")
cedula:string

}
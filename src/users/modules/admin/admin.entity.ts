import { BaseEntity, Entity } from "typeorm";
import { Column } from "typeorm";

@Entity({name:"admins"})
export class AdminEntity extends BaseEntity{

}
import { PerfilUserEntity } from "src/perfil-user/entities/perfil-user.entity";
import { BasedEntity } from "src/shared/based.entity";
import {
    Entity,
    Column,
    OneToMany,
    ManyToOne,
    BeforeInsert,
} from 'typeorm';
import { PlantCategoriesEntity } from "./plant-categories.entity";

@Entity({name:"orchards"})
export class OrchardEntity extends BasedEntity {

@Column("numeric",{default:0})
irrigations_carried_out:number

@Column("numeric",{default:0})
used_fertilizer:number

@Column("text",{default:"0kg"})
expected_production:string

@Column("text",{default:"0kg"})
harvested:string

@ManyToOne(()=>PlantCategoriesEntity,plant=>plant.orchard)
plant:PlantCategoriesEntity

@ManyToOne(()=>PerfilUserEntity,user=>user.orchards)
user:PerfilUserEntity
}

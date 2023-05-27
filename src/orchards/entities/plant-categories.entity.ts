import { BasedEntity } from "src/shared/based.entity";
import {
    Entity,
    Column,
    OneToMany,
    BeforeInsert,
} from 'typeorm';
import { OrchardEntity } from "./orchard.entity";


@Entity({name:"plant_categories"})
export class PlantCategoriesEntity extends BasedEntity{
    @Column("text")
    name:string

    @OneToMany(()=>OrchardEntity,orchard=>orchard.plant)
    orchard:OrchardEntity
}
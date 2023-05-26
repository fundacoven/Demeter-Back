import { BasedEntity } from "src/shared/based.entity";
import {
    Entity,
    Column,
    OneToMany,
    BeforeInsert,
    ManyToOne
} from 'typeorm';
import { NoticesCategoriesEntity } from "./notices-categories.entity";
import { PerfilUserEntity } from "src/perfil-user/entities/perfil-user.entity";

@Entity({name:"notices"})
export class NoticeEntity extends BasedEntity {

@Column("text")
title:string

@Column("text")
description:string

@Column("bool",{default:false})
check_admin:boolean

@ManyToOne(()=>NoticesCategoriesEntity,notices_categorie=>notices_categorie.notice)
notice_categorie:NoticesCategoriesEntity

@ManyToOne(()=>PerfilUserEntity,user=>user.notices)
user:PerfilUserEntity
}

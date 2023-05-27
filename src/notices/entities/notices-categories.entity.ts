import { BasedEntity } from "src/shared/based.entity";
import {
    Entity,
    Column,
    OneToMany,
    BeforeInsert,
} from 'typeorm';
import { NoticeEntity } from "./notice.entity";

@Entity({name:"notices_categories"})
export class NoticesCategoriesEntity extends BasedEntity{
    @Column("text")
    name:string

    @OneToMany(()=>NoticeEntity,notices=>notices.notice_categorie)
    notice:NoticeEntity
}
import { NoticeEntity } from 'src/notices/entities/notice.entity';
import { OrchardEntity } from 'src/orchards/entities/orchard.entity';
import { BasedEntity } from 'src/shared/based.entity';
import { StudentEntity } from 'src/students/entities/student.entity';
import {
    Entity,
    Column,
    OneToMany,
    BeforeInsert,
} from 'typeorm';

@Entity({name:"perfil_user"})
export class PerfilUserEntity extends BasedEntity{

@Column("text",{unique:true})
email:string

@Column("text")
password:string

@Column("text",{nullable:true})
state?:string

@Column("text",{nullable:true})
municipality?:string

@Column("text",{nullable:true})
description?:string

@Column("text",{nullable:true})
institution_name?:string

@Column("text")
first_name:string

@Column("text")
second_name:string

@Column("text",{nullable:true,default:"https://fundacoven.org/wp-content/uploads/2020/08/Logo-Azul.jpg"})
perfil_photo_url?:string

@Column("text",{nullable:true})
phone?:string

@Column("text",{array:true,default:["user"]})
roles:string[]

@OneToMany(()=> OrchardEntity,orchard=>orchard.user)
orchards:OrchardEntity

@OneToMany(()=> StudentEntity,student=>student.user)
students:StudentEntity

@OneToMany(()=>NoticeEntity,notice=>notice.user)
notices:NoticeEntity
}

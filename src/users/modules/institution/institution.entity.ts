import { Entity,Column,OneToMany,OneToOne,JoinColumn } from "typeorm";
import { BasedEntity } from "src/shared/entities";
import { OrchardEntity } from "src/orchards/entities";
import { StudentEntity } from "src/users/entities/student.entity";
import { NoticeEntity } from "src/notices/entities";
import { UserEntity } from "src/users/entities/user.entity";

@Entity({name:"institution"})
export class InstitutionEntity extends BasedEntity {

@Column("text")
rif:string

@Column('text', { nullable: true })
state?: string;

@Column('text', { nullable: true })
municipality?: string;

@Column('text', { nullable: true })
description?: string;

@Column('text', { nullable: true })
institution_name?: string;

@OneToOne(()=>UserEntity)
@JoinColumn()
user:UserEntity

@OneToMany(() => OrchardEntity, (orchard) => orchard.institution,{
    eager:true
})
orchards: OrchardEntity[];

@OneToMany(() => StudentEntity, (student) => student.institution,{
    eager:true
})
students: StudentEntity[];

@OneToMany(() => NoticeEntity, (notice) => notice.institution,{
    eager:true
})
notices: NoticeEntity[];

}
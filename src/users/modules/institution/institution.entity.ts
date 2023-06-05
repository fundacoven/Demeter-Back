import { Entity,Column,OneToMany } from "typeorm";
import { BasedEntity } from "src/shared/entities";
import { OrchardEntity } from "src/orchards/entities";
import { StudentEntity } from "src/users/entities/student.entity";
import { NoticeEntity } from "src/notices/entities";

@Entity({name:"Institution"})
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

@OneToMany(() => OrchardEntity, (orchard) => orchard.institution)
orchards: OrchardEntity[];

@OneToMany(() => StudentEntity, (student) => student.institution)
students: StudentEntity[];

@OneToMany(() => NoticeEntity, (notice) => notice.institution)
notices: NoticeEntity[];

}
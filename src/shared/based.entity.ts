import {
PrimaryGeneratedColumn,
CreateDateColumn,
UpdateDateColumn
} from 'typeorm';

export class BasedEntity{
    @PrimaryGeneratedColumn("uuid")
    id?:string;
    @CreateDateColumn({ select: false })
    createdAt?: Date;
    @UpdateDateColumn({ select: false })
    updatedAt?: Date;
}
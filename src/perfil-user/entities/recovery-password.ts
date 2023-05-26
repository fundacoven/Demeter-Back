import { BasedEntity } from 'src/shared/based.entity';
import {
    Entity,
    Column,
    OneToMany,
    BeforeInsert,
} from 'typeorm';

@Entity({name:"recovery_password"})
export class RecoveryPasswordEntity extends BasedEntity{
    @Column('text')
    email: string;
  
    @Column('text')
    token: string;
}
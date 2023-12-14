import { BasedEntity } from 'src/shared/entities';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'recovery_password' })
export class RecoveryPasswordEntity extends BasedEntity {
  @Column('text')
  email: string;

  @Column('text')
  token: string;
}

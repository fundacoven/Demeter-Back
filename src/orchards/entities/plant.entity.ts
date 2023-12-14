import { Entity, Column, OneToMany } from 'typeorm';
import { OrchardEntity } from './orchard.entity';
import { BasedEntity } from 'src/shared/entities';

@Entity({ name: 'plants' })
export class PlantEntity extends BasedEntity {
  @Column('text')
  name: string;

  @Column("text")
  harvest_time:string

  @OneToMany(() => OrchardEntity, (orchard) => orchard.plant)
  orchard: OrchardEntity;
}

import { UserEntity } from 'src/users/entities/user.entity';
import { BasedEntity } from 'src/shared/entities';
import { Entity, Column, ManyToOne } from 'typeorm';
import { PlantEntity } from './plant.entity';
import { InstitutionEntity } from 'src/users/modules/institution/institution.entity';

@Entity({ name: 'orchards' })
export class OrchardEntity extends BasedEntity {
  @Column('numeric', { default: 0 })
  irrigations_carried_out: number;

  @Column('numeric', { default: 0 })
  used_fertilizer: number;

  @Column('text', { default: '0kg' })
  expected_production: string;

  @Column('text', { default: '0kg' })
  harvested: string;

  @ManyToOne(() => PlantEntity, (plant) => plant.orchard)
  plant: PlantEntity;

  @ManyToOne(() => InstitutionEntity, (institution) => institution.orchards)
  institution: InstitutionEntity;
}

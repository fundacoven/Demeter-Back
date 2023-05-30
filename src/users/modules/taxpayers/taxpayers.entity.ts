import { BasedEntity } from "src/shared/entities";
import { Entity } from "typeorm";

@Entity({name:"taxpayers"})
export class TaxpayersEntity extends BasedEntity{

}
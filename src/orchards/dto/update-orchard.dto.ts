import { PartialType } from '@nestjs/mapped-types';
import { CreateOrchardDto } from './create-orchard.dto';

export class UpdateOrchardDto extends PartialType(CreateOrchardDto) {}

import { EntityId, ICustomBaseEntity } from '../../../domain';
import {
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class CustomBaseEntity implements ICustomBaseEntity {
  @PrimaryColumn('uuid')
  id: EntityId;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

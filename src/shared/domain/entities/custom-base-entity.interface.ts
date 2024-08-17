import type { UUID } from 'crypto';

export type EntityId = UUID;

export abstract class ICustomBaseEntity {
  abstract id?: EntityId;
  abstract createdAt?: Date;
  abstract updatedAt?: Date;
}

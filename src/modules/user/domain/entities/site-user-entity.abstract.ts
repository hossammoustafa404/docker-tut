import { ICustomBaseEntity } from 'src/shared/domain/entities';

export abstract class ISiteUser extends ICustomBaseEntity {
  abstract firstName: string;
  abstract lastName: string;
  abstract email: string;
  abstract password: string;
}

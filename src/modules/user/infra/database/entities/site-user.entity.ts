import { ISiteUser } from 'src/modules/user/domain';
import { CustomBaseEntity } from 'src/shared/infra/database';
import { Column, Entity } from 'typeorm';

@Entity()
export class SiteUser extends CustomBaseEntity implements ISiteUser {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;
}

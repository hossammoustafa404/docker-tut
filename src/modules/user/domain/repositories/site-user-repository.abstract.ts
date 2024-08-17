import { IBaseRepository } from 'src/shared/domain/repositories';
import { ISiteUser } from '../entities';

export abstract class IUserRepository extends IBaseRepository<ISiteUser> {}

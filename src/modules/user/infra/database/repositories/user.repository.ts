import { InjectRepository } from '@nestjs/typeorm';
import { SiteUser } from '../entities';
import { Repository } from 'typeorm';
import { ISiteUser, IUserRepository } from 'src/modules/user/domain';
import { BaseRepository } from 'src/shared/infra/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository
  extends BaseRepository<ISiteUser>
  implements IUserRepository
{
  constructor(
    @InjectRepository(SiteUser)
    private readonly userRepository: Repository<SiteUser>,
  ) {
    super(userRepository);
  }
}

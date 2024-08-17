import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SiteUser } from './entities';
import { UserRepository } from './repositories';
import { IUserRepository } from '../../domain';

@Module({
  imports: [TypeOrmModule.forFeature([SiteUser])],
  providers: [
    {
      provide: IUserRepository,
      useClass: UserRepository,
    },
  ],
  exports: [IUserRepository],
})
export class DatabaseModule {}

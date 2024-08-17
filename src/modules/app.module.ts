import { Module } from '@nestjs/common';
import { UsersModule } from './user/users.module';
import { DatabaseModule } from 'src/shared/infra/database';

@Module({
  imports: [DatabaseModule, UsersModule],
})
export class AppModule {}

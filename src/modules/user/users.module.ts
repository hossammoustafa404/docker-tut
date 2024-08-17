import { Module } from '@nestjs/common';
import { UserService } from './application';
import { UserController } from './adapters';
import { DatabaseModule } from './infra';

@Module({
  imports: [DatabaseModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UsersModule {}

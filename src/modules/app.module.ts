import { Module } from '@nestjs/common';
import { UsersModule } from './user/users.module';
import { DatabaseModule } from 'src/shared/infra/database';
import { WelcomeController } from './welcome.controller';

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [WelcomeController],
})
export class AppModule {}

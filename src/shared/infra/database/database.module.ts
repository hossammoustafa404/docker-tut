import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SiteUser } from 'src/modules/user/infra';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.PG_HOST,
        port: +process.env.PG_PORT,
        username: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.PG_DATABASE,
        entities: [SiteUser],
        migrations: [],
        synchronize: true,
        logging: true,
      }),
    }),
  ],
})
export class DatabaseModule {}

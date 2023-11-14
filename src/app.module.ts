import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './health/health.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { LoggingModule } from './logging/logging.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
    }),
    HealthModule,
    UsersModule,
    DatabaseModule,
    LoggingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

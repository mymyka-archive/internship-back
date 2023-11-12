import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  password: configService.getOrThrow('DB_PASSWORD'),
  username: configService.getOrThrow('DB_USER'),
  database: configService.getOrThrow('DB_NAME'),
  entities: ['**/src/**/*.entity.{js,ts}'],
  migrations: ['db/migrations/*.{js,ts}'],
});

import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { User } from '../modules/domains/user/entities/user.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';

const entityes = [User];

export const ormConnection: PostgresConnectionOptions = {
  type: 'postgres',
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  username: process.env.DB_USER,
  migrations: ['dist/**/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  entities: [...entityes],
  logging: ['query', 'error'],
};

export const ormModuleOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  username: process.env.DB_USER,
  entities: [...entityes],
  logging: ['query', 'error'],
};

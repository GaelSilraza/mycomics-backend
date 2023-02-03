import 'reflect-metadata';
import 'dotenv/config';
import { DataSource } from 'typeorm';
import * as entities from '../database/models';

const port = process.env.DB_PORT as number | undefined;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: entities,
  migrations: [],
  subscribers: [],
});

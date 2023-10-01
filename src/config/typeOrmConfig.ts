import 'dotenv/config';
import { DataSource } from 'typeorm';
import { ormConnection } from './configuration';

const connectionSource = new DataSource(ormConnection);

export default connectionSource;

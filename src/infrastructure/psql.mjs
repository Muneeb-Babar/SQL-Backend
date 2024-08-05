import { DataSource } from "typeorm";
import { DB_PORT, POSTGRES_DB, POSTGRES_PASSWORD, POSTGRES_USER } from "../config/envoirment.mjs";
import path from 'path';
import { fileURLToPath } from 'url'; 

// Get the current module file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: DB_PORT,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  synchronize: true,
  logging: true,
  entities: [path.join(__dirname, '../**/*.entity.mjs')],
});

export default dataSource;

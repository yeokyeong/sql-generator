import dotenv from "dotenv";

dotenv.config();
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mariadb",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER_NAME,
  password: process.env.DB_USER_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: true,
  // entities: [Post, Category],
  subscribers: [],
  migrations: [],
})
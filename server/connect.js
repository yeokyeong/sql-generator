import mariadb from "mysql";
import dotenv from "dotenv";

dotenv.config();

const db = mariadb.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER_NAME,
  password: process.env.DB_USER_PASSWORD,
  database: process.env.DB_DATABASE,
});

export default db;

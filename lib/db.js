import { Pool } from "pg";

let conn;

if (!conn) {
  conn = new Pool({
    user: process.env.PGSQL_USER,
    password: process.env.PGSQL_PASSWORD,
    host: process.env.PGSQL_HOST,
    port: process.env.PGSQL_PORT,
    database: process.env.PGSQL_DATABASE,
  });
}

export default conn ;

// lib/db.js

// import { Pool } from 'pg';

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// // 데이터베이스 쿼리 함수
// export async function query(text, params) {
//   const client = await pool.connect();
//   try {
//     const result = await client.query(text, params);
//     return result;
//   } finally {
//     client.release();
//   }
// }

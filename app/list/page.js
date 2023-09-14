import { connectDB } from "@/lib/db"
import Link from 'next/link'
import {Pool} from 'pg';
import ListItem from "./list_item";
import MyPage from "./my_list";
//import DetailLink from "./DetailLink"

export const dynamic = 'force-dynamic'
const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // PostgreSQL 연결 문자열
});
export default async function List() {
    let client;
    try {
        const client = await pool.connect();
        const result = await client.query(`SELECT * FROM ${process.env.DB_LIST}`);
        const rows = result.rows;
    
        return (
          <div className="w-10/12 max-w-7xl mx-auto">
            <MyPage result={rows} />
            <ListItem result={rows} />
            {/* <Link href='./write'><button className="text-base m-2 p-5 border border-black rounded-xl">글 쓰기</button></Link> */}
          </div>
        )
      } catch (error) {
        console.error('Error:', error);
      } finally {
        if(client){
            client.release();
        }
        
      }
}
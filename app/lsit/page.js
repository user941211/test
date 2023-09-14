import { connectDB } from "@/util/database.js"
import Link from 'next/link'
import ListItem from "./list_item";
//import DetailLink from "./DetailLink"

export const dynamic = 'force-dynamic'

export default async function List() {
    let db = (await connectDB).db(`${process.env.DB_DB}`);
    let result = await db.collection(`${process.env.DB_LIST}`).find().toArray();
    return (
        <div classNmae="w-10/12 max-w-7xl mx-auto">
            <ListItem result={result} />
            {/* <Link href='./write'><button className="text-base m-2 p-5 border border-black rounded-xl">글 쓰기</button></Link> */}
        </div>
    )
}
import AddBtn from "./components/addBtn";
import Link from "next/link"
import ShowIngredients from './addForm/page'


export default function Home() {
  return (
    <main className="">
      <h1>Hello World</h1>
      <br />
      <AddBtn />
      <Link href="/addForm">Add foods</Link>
      {/* <ShowIngredients data={data}/> */}
    </main>
  )
}

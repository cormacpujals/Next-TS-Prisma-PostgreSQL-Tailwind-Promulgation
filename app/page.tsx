import AddBtn from "./components/addBtn";
import Link from "next/link"

export default function Home() {
  return (
    <main className="">
      <h1>Hello World</h1>
      <br />
      <AddBtn />
      <Link href="/addForm">Add foods</Link>
    </main>
  )
}

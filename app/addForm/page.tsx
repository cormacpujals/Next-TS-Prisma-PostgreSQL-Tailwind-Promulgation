async function getIngredients() {
  let url = `http://localhost:3000/api/ingredients/getIngredients`;
  const res = await fetch(url);
  if(!res.ok) {
    console.log(res)
  }
  return res.json();
}

export default async function ShowIngredients() {
  const data : 
  {
    name: string, 
    category: string, 
    roomTemp: number | null | "", 
    fridgeOpened: number | null | "",
    fridgeUnopened: number | null | "",
    freezer: number | null | "", 
    id: number
  }[] = await getIngredients()
  console.log(data);
  return (
    <main className="px-4 py-4">
      {data.map(ingredient => (
        <h1 className="text-lg py-6">{ingredient.name}</h1>
      ))}
    </main>
  )
}

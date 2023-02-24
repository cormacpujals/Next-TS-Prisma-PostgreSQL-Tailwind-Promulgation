// async function getIngredients() {
//   let url = `http://localhost:3000/api/ingredients/getIngredients`;
//   const res = await fetch(url);
//   if(!res.ok) {
//     console.log(res)
//   }
//   return res.json();
// }
'use client'
import { useState } from "react";

const data = [
  {
    name: "Potatoes", 
    category: "pantry", 
    roomTemp: null, 
    fridgeOpened: 10,
    fridgeUnopened: 10,
    freezer: 10, 
    id: 1
  },
  {
    name: "Chicken", 
    category: "mps", 
    roomTemp: 10, 
    fridgeOpened: "",
    fridgeUnopened: 10,
    freezer: 10, 
    id: 2
  },
  {
    name: "Bacon", 
    category: "mps", 
    roomTemp: 10, 
    fridgeOpened: "",
    fridgeUnopened: 10,
    freezer: 10, 
    id: 3
  },
  {
    name: "Apples", 
    category: "produce", 
    roomTemp: 10, 
    fridgeOpened: 10,
    fridgeUnopened: 10,
    freezer: 10, 
    id: 4
  },
  {
    name: "Blueberries", 
    category: "produce", 
    roomTemp: 10, 
    fridgeOpened: 10,
    fridgeUnopened: 10,
    freezer: 10, 
    id: 5
  },
  {
    name: "Milk", 
    category: "dairy", 
    roomTemp: 10, 
    fridgeOpened: 10,
    fridgeUnopened: 10,
    freezer: 10, 
    id: 6
  },
  {
    name: "Cheese", 
    category: "dairy", 
    roomTemp: 10, 
    fridgeOpened: 10,
    fridgeUnopened: 10,
    freezer: 10, 
    id: 7
  },
  {
    name: "Rice", 
    category: "pantry", 
    roomTemp: null, 
    fridgeOpened: 10,
    fridgeUnopened: 10,
    freezer: 10, 
    id: 1
  },
  {
    name: "Honey", 
    category: "pantry", 
    roomTemp: null, 
    fridgeOpened: 10,
    fridgeUnopened: 10,
    freezer: 10, 
    id: 1
  },
]

export default function ShowIngredients() {
  // const data : 
  // {
  //   name: string, 
  //   category: string, 
  //   roomTemp: number | null | "", 
  //   fridgeOpened: number | null | "",
  //   fridgeUnopened: number | null | "",
  //   freezer: number | null | "", 
  //   id: number
  // }[] = await getIngredients()
  // console.log(data);
  const [category, setCategory] = useState("")
  return (
    <main className="px-4 py-4">
      <div className="flex justify-between items-center py-6">
        <h1 className="hidden">Selected: {category}</h1>
        <button 
          onClick={(e) => setCategory(e.target.value)}
          value="mps"
          className="px-2 bg-green-700 rounded-md">
            Meat, Poultry, and Seafood
        </button>
        <button 
          onClick={(e) => setCategory(e.target.value)}
          value="produce"
          className="px-2 bg-green-700 rounded-md">
            Produce
        </button>
        <button 
          onClick={(e) => setCategory(e.target.value)}
          value="dairy"
          className="px-2 bg-green-700 rounded-md">
            Dairy
        </button>
        <button 
          onClick={(e) => setCategory(e.target.value)}
          value="pantry"
          className="px-2 bg-green-700 rounded-md">
            Pantry
        </button>
      </div>
      <div>
        <fieldset>
          {data.filter(i => i.category === category).map((ingredient, i) => (
            <div>
              <input 
              key={i}
              type="radio" 
              name="ingredient" 
              id={ingredient.name} 
              value={ingredient.name}
              checked/>
              <label key={i} className="text-lg px-2 py-6">{ingredient.name}</label>
            </div>
          ))}
        </fieldset>
      </div>
    </main>
  )
}

'use client'

import { useState } from "react";

export default function addIngredient() {
  const [food, setFood] = useState("")
  return (
    <form>
      <div>
        <input 
        onChange={(e) => setFood(e.target.value)}
        type="text" 
        name="food"
        value={food}
        placeholder="input food!"
        ></input>
      </div>
    </form>
  )
}
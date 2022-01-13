//import React from "react";
import Item from "./Item";
import React, {useState} from "react"

function ShoppingList({ items }) {

  const [selectedCategory, setCategory] = useState("All");
  const [newItemArray, setItemArray] = useState(items);

  function handleChange(e){
    setCategory(e.target.value);
    setItemArray(
      if(selectedCategory === "All"){
        return items
      } 
      else items.filter((item) => item.category === selectedCategory)
      
    console.log(selectedCategory)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange = {handleChange} name={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newItemArray.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

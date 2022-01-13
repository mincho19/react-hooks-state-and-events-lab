import React, { useState } from "react";

function Item({ name, category }) {

  const [status, setStatus] = useState("");

  function handleClick(){
    if(status === ""){
      setStatus("in-cart") 
      document.querySelector(".add").value = "Remove From Cart"
    }
    else{
      setStatus("");
      document.querySelector(".add").value = "Add to Cart"
    }
  }
  return (
    <li className={status}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;

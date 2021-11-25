import React, {useState} from "react";

function Item({ name, category }) {
  const [isOn, setCart] = useState("")
  function updateCart(){
    setCart(!isOn)
  }

  const classCart = isOn ? "in-cart" : ""
  return (
    <li className={classCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={updateCart} className="add">{isOn? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;

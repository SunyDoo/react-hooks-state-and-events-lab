import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState(false);

  function AddToCart(){
    setCart((inCart) => !inCart);
  }

  const itemInCart = inCart ? "in-cart" : ""
  
  return (
    <li className={itemInCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={AddToCart}>{itemInCart? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;

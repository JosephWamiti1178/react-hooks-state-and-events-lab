import React,{ useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(true);
  const inCartClass = inCart ? "" : "in-cart";
  function addItemToCart(event){
    setInCart((inCart) => !inCart);

  }
  return (
    <li className={inCartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addItemToCart}>{inCart ? "Add To Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;

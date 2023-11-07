import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useGlobalContext } from "../context";

const CartItem = ({ item }) => {
  const { id, title, price, image, qty } = item;
  const { addCart, removeCart, removeProduct } = useGlobalContext();
  return (
    <article className="cart-item">
      <img src={image} alt={title} />
      <div className="item-details">
        <h4 className="item-title">{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => removeProduct(id)}>
          Убрать
        </button>
      </div>
      <div className="amount-container">
        <button className="amount-btn" onClick={() => addCart(item)}>
          <FaChevronUp />
        </button>
        <p className="amount">{qty}</p>
        <button className="amount-btn" onClick={() => removeCart(item)}>
          <FaChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;

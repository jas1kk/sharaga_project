import React from "react";
import { useGlobalContext } from "../context";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";


const CartContainer = () => {
  const { cart, setCart, totalPrice} = useGlobalContext();

  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
        <h2>Ваша Корзина</h2>
          <h4 className="empty-cart">На данный момент корзина пуста</h4>
          <Link className="fill-cart" to="/">
          Заполните
          </Link>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Ваша Корзина</h2>
        <div className="cart-underline"></div>
      </header>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
                <div className="cart-total">
          <h4>
            Общая цена <span>${totalPrice}</span>
          </h4>
        </div>
      </div>
      <footer>
        <div className="footer-btns">
          <button className="to-cart">
            <Link to="/">continue shopping</Link>
          </button>
          <button className="btn clear-btn" onClick={() => setCart([])}>
            Очистить Корзину
          </button>
        </div>
      </footer>
    </section>
  );
};

export default CartContainer;

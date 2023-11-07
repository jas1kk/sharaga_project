import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const url = "https://fakestoreapi.com/products";

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return (cart = JSON.parse(localStorage.getItem("cart")));
  } else {
    return [];
  }
};

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(getLocalStorage());
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  let componentMounted = true;
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(url);
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const addCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };
  const removeCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  };

  let totalPrice = cart.reduce((total, cartItem) => {
    const { price, qty } = cartItem;
    let itemPrice = price * qty;
    total += itemPrice;
    total = parseFloat(total.toFixed(2));
    return total;
  }, 0);


  const removeProduct = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        addCart,
        removeCart,
        setCart,
        totalPrice,
        removeProduct,
        data,
        setData,
        filter,
        setFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

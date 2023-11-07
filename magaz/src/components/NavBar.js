import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { links } from "../data";
import { useGlobalContext } from "../context";

const NavBar = () => {
  const { cart, totalPrice} = useGlobalContext();
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  return (
    <div className={`${showLinks ? "nav-center shadow" : "nav-center"}`}>
      <div className="nav-header">
        <Link to="/">
          <h1 className="logo">
            <span>Магазин</span>
          </h1>
        </Link>
      </div>

      <div className="links-container" ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id} onClick={toggleLinks}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
          {/* <div className="cart-amount-total">
            <p className="amount-navbar">Amount: {cart.length}</p>
            <span>Total: ${totalPrice}</span>
          </div> */}
      </div>
    </div>
  );
};

export default NavBar;

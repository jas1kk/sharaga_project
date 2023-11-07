import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const SingleProduct = () => {
  const { addCart } = useGlobalContext();
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data);
        });
    } catch (error) {
      console.log("error");
    }
  }, [id]);

  const { title, image, price, description } = data;

  return (
    <div>
      {data && (
        <div className="single-product">
          <button className="back-btn">
            <Link to="/">Вернутья к Товарам</Link>
          </button>
          <div className="section">
            <div className="col">
              <div className="single-img-bx">
                <img src={image} alt="" />
              </div>
            </div>
            <div className="col">
              <h2>{title}</h2>
              <h3>${price}</h3>
              <p>{description}</p>
              <button onClick={() => addCart(data)}>
                <Link to="/cart">Добавить в Корзину</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;

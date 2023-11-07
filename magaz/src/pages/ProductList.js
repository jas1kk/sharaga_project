import React, { useState } from "react";
import Product from "../components/Product";
import { useGlobalContext } from "../context";

const ProductList = () => {
  const { data, filter, setFilter} = useGlobalContext();
  const [searchTerm, setSearchTerm] = useState("");

  const filterProducts = (category) => {
    const newItems = data.filter((item) => item.category === category);
    setFilter(newItems);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredItems = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilter(filteredItems);
  };

  return (
    <div className="content">
      <div className="products-title">
        <h2 className="products-title-text">Наши Товары</h2>
        <div className="products-underline"></div>

        <div className="search-bar">
          <input className="search-input"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
    </div>

      <div className="buttons">
        <button onClick={() => setFilter(data)}>Все</button>
        <button onClick={() => filterProducts("jewelery")}>Ювелирные Изделия</button>
        <button onClick={() => filterProducts("electronics")}>
          Электроника
        </button>
        <button onClick={() => filterProducts("men's clothing")}>
          Мужская Одежда
        </button>
        <button onClick={() => filterProducts("women's clothing")}>
          Женская Одежда
        </button>
      </div>
      <div className="box">
        {filter.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;

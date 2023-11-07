import React, { useState } from "react";

export default function Products(props) {
  const [products, setProducts] = useState(props.allProducts);
  return (
    <div>
      <div className="titleContainer">
        <h1 className="mainTitle">Browse All Products</h1>
        <input
          type="text"
          placeholder="Search"
          className="search"
          onKeyUp={(event) => {
            setProducts(
              props.allProducts.filter((product) =>
                product.name
                  .toLowerCase()
                  .includes(event.target.value.toLowerCase())
              )
            );
          }}
        />
      </div>
      <div className="products">
        {products.map((product, index) => {
          return (
            <div key={index} className="product">
              <img src={product.image} alt={product.name} />
              <div>
                <span>
                  <h2>{product.name}</h2>
                  <p>${product.price}</p>
                </span>
                <button className="addToCart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

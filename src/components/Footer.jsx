import React from "react";

export default function Footer(props) {
  return (
    <div className="footer">
      <div>
        <p
          style={{
            display: props.title === "Product" ? "none" : "block",
          }}
        >
          Total
        </p>
        <h2 className="price">$900.05</h2>
        <button
          className="addToWishList"
          style={{
            display: props.title !== "Product" ? "none" : "block",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>
      <button
        className="footerButton"
        onClick={() => {
          props.title === "Cart"
            ? (window.location.href = "/checkout")
            : props.title === "Checkout"
            ? (window.location.href = "/orders")
            : props.title === "Product"
            ? console.log("Added to Cart")
            : props.title === "Orders"
            ? (window.location.href = "/products")
            : props.title === "Products"
            ? (window.location.href = "/cart")
            : (window.location.href = "/products");
        }}
      >
        <p>
          {props.title === "Cart"
            ? "Checkout"
            : props.title === "Checkout"
            ? "Pay"
            : props.title === "Product"
            ? "Add to Cart"
            : props.title === "Products"
            ? "Go to Cart"
            : props.title === "Orders"
            ? "See More Products"
            : "Browse Items"}
        </p>
      </button>
    </div>
  );
}

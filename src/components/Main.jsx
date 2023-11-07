import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Products from "./Products";

export default function Main() {
  const [allProducts, setAllProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      name: "Product 2",
      price: 200,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      name: "Product 2",
      price: 200,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 5,
      name: "Product 2",
      price: 200,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 6,
      name: "Product 2",
      price: 200,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 7,
      name: "Product 2",
      price: 200,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 8,
      name: "Product 2",
      price: 200,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 9,
      name: "Product 2",
      price: 200,
      image: "https://picsum.photos/200/300",
    },
  ]);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@gmail.com",
    cart: [1, 3, 5],
    orders: [
      {
        id: 1,
        date: "2021-05-01",
      },
    ],
  });
  const [location, setLocation] = useState(
    window.location.href.split("/")[window.location.href.split("/").length - 1]
  );
  const [currentLocation, setCurrentLocation] = useState(
    location === ""
      ? "Home"
      : location === "cart"
      ? "Cart"
      : location === "checkout"
      ? "Checkout"
      : location === "products"
      ? "Products"
      : location === "orders"
      ? "Orders"
      : "Product"
  );
  return (
    <div>
      <Header
        title={currentLocation}
        backLink={
          location === "cart"
            ? "/products"
            : location === "checkout"
            ? "/cart"
            : "/"
        }
      />
      {currentLocation === "Products" && <Products allProducts={allProducts} />}
      <Footer title={currentLocation} />
    </div>
  );
}

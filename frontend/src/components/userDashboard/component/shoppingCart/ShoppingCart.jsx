// src/components/userDashboard/component/shoppingCart/ShoppingCart

import React, { useEffect, useState } from "react";
import axios from "axios";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  // Fetch cart data from db.json
  useEffect(() => {
    axios
      .get("http://localhost:5000/cart")
      .then((response) => setCart(response.data))
      .catch((error) => console.error("Error fetching cart:", error));
  }, []);

  return (
    <div className="p-4">
      <h3 className="mb-4">Shopping Cart</h3>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Author</th>
            <th>Price</th>
            <th>Publication Year</th>
          </tr>
        </thead>
        <tbody>
          {cart.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">
                No items in the cart
              </td>
            </tr>
          ) : (
            cart.map((book, index) => (
              <tr key={index}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.category}</td>
                <td>{book.author}</td>
                <td>{book.price}</td>
                <td>{book.publicationYear}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingCart;

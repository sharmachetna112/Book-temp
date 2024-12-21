// sr/components/userDashboard/component/books/ManageUserBooks

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ManageUserBooks = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // Fetch books from db.json
  useEffect(() => {
    axios
      .get("http://localhost:5000/books")
      .then((response) => setBooks(response.data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  const addToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]);
    axios
      .post("http://localhost:5000/cart", book)
      .then(() => console.log("Book added to cart"))
      .catch((error) => console.error("Error adding to cart:", error));
  };

  const goToCart = () => {
    navigate("/user-login/shopping-cart", { state: { cart } });
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h3 className="mb-4">Manage Books</h3>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by Title, Category, or Author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="btn btn-primary mb-4" onClick={goToCart}>
        Go to Cart ({cart.length} items)
      </button>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Author</th>
            <th>Price</th>
            <th>Publication Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.category}</td>
              <td>{book.author}</td>
              <td>{book.price}</td>
              <td>{book.publicationYear}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => addToCart(book)}
                >
                  Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUserBooks;

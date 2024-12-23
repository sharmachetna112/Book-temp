// // src/components/userDashboard/component/shoppingCart/ShoppingCart
// import React, { useEffect, useState } from "react";
// import axios from "axios";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const userId = 1; // Replace with dynamic User ID if required

  // Fetch cart data
  useEffect(() => {
   axios
  .get(`http://localhost:6060/api/shoppingcart/get${userId}`)
  .then((response) => {
    console.log("API Response:", response);
    setCart(response.data);
  })
  .catch((error) => console.error("Error fetching cart:", error));
  }, [userId]);
  return (
    <div className="p-4">
      <h3 className="mb-4">Shopping Cart</h3>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ISBN</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Edition</th>
          </tr>
        </thead>
        <tbody>
          {cart.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                No items in the cart
              </td>
            </tr>
          ) : (
            cart.map((item, index) => (
              <tr key={index}>
                <td>{item.isbn}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.category?.description || "N/A"}</td>
                <td>{item.edition}</td>
                </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingCart;
// const ShoppingCart = () => {
//   const [cart, setCart] = useState([]);
//   const [userId, setUserId] = useState(1); // Example user ID, can be dynamic
//   const [newBook, setNewBook] = useState({ isbn: "" });
//   const [updateData, setUpdateData] = useState({ id: "", isbn: "" });
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   // Fetch cart data for the s
// // Fetch cart data for the specific user
//   useEffect(() => {
//     axios
//       .get(`http://localhost:6060/api/shoppingcart/${userId}`)
//       .then((response) => setCart(response.data))
//       .catch((error) => setErrorMessage("Error fetching cart: " + error.message));
//   }, [userId]);
// // Add a new book to the shopping cart
//   const handleAddBook = () => {
//     axios
//       .post(`http://localhost:6060/api/shoppingcart/post`, { userId, isbn: newBook.isbn })
//       .then((response) => {
//         setSuccessMessage(response.data);
//         setNewBook({ isbn: "" });
//         refreshCart();
//       })
//       .catch((error) => setErrorMessage("Error adding book: " + error.message));
//   };

// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // const ShoppingCart = () => {
// //   const [cart, setCart] = useState([]);
// //   const [userId, setUserId]= useState('')

// //   // Fetch cart data from db.json
// //   useEffect(() => {
// //     axios
// //       .get("http://localhost:6060/shoppingcart/get"+userId)
// //       .then((response) => setCart(response.data))
// //       .catch((error) => console.error("Error fetching cart:", error));
// //   }, []);

// //   return (
// //     <div className="p-4">
// //       <h3 className="mb-4">Shopping Cart</h3>
// //       <table className="table table-bordered">
// //         <thead className="thead-dark">
// //           <tr>
// //             <th>ID</th>
// //             <th>Title</th>
// //             <th>Category</th>
// //             <th>Author</th>
// //             <th>Price</th>
// //             <th>Publication Year</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {cart.length === 0 ? (
// //             <tr>
// //               <td colSpan="6" className="text-center">
// //                 No items in the cart
// //               </td>
// //             </tr>
// //           ) : (
// //             cart.map((book, index) => (
// //               <tr key={index}>
// //                 <td>{book.id}</td>
// //                 <td>{book.title}</td>
// //                 <td>{book.category}</td>
// //                 <td>{book.author}</td>
// //                 <td>{book.price}</td>
// //                 <td>{book.publicationYear}</td>
// //               </tr>
// //             ))
// //           )}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default ShoppingCart;

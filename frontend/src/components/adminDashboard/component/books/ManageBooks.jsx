// // src/components/adminDashboard/component/books/ManageBooks.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageBooks = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newBook, setNewBook] = useState({
    title: "",
    category: "",
    author: "",
    price: "",
    publicationYear: "",
  });

  // Fetch books data from the server on component mount
  useEffect(() => {
    axios
      .get("http://localhost:6060/api/inventory/post")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  // Add a new book to the list
  const addBook = () => {
    if (
      !newBook.title ||
      !newBook.category ||
      !newBook.author ||
      !newBook.price ||
      !newBook.publicationYear
    ) {
      alert("All fields must be filled!");
      return;
    }
    if (isNaN(newBook.price) || isNaN(newBook.publicationYear)) {
      alert("Price and Publication Year must be valid numbers.");
      return;
    }

    axios
      .post("http://localhost:6060/api/inventory/post", newBook)
      .then((response) => {
        setBooks((prevBooks) => [...prevBooks, response.data]);
      })
      .catch((error) => console.error("Error adding book:", error));

    // Clear the input fields after adding the book
    setNewBook({
      title: "",
      category: "",
      author: "",
      price: "",
      publicationYear: "",
    });
  };

  // Edit a book by ID
  const editBook = (bookId) => {
    const bookToEdit = books.find((book) => book.id === bookId);
    setNewBook(bookToEdit);
  };

  const confirmDelete = (bookId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this book?");
    if (isConfirmed) {
      deleteBook(bookId);
    }
  };

  // Delete a book by ID
  const deleteBook = (bookId) => {
    axios
      .delete(`http://localhost:6060/api/inventory/update/${bookId}`)
      .then(() => {
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
      })
      .catch((error) => console.error("Error deleting book:", error));
  };

  // Filter books based on search term
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Highlight search term in text
  const highlightText = (text, term) =>
    term
      ? text.replace(new RegExp(term, "gi"), (match) => `<mark>${match}</mark>`)
      : text;

  return (
    <div className="p-4">
      <h3 className="mb-4">Manage Books</h3>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by Title, Category, or Author"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Add Book Form */}
      <div className="mb-4">
        <h5>Add New Book</h5>
        <div className="row mb-3">
          <div className="col-12 col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              value={newBook.title}
              onChange={(e) =>
                setNewBook({ ...newBook, title: e.target.value })
              }
            />
          </div>
          <div className="col-12 col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Category"
              value={newBook.category}
              onChange={(e) =>
                setNewBook({ ...newBook, category: e.target.value })
              }
            />
          </div>
          <div className="col-12 col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Author"
              value={newBook.author}
              onChange={(e) =>
                setNewBook({ ...newBook, author: e.target.value })
              }
            />
          </div>
          <div className="col-12 col-md-2">
            <input
              type="number"
              className="form-control"
              placeholder="Price"
              value={newBook.price}
              onChange={(e) =>
                setNewBook({ ...newBook, price: e.target.value })
              }
            />
          </div>
          <div className="col-12 col-md-2">
            <input
              type="number"
              className="form-control"
              placeholder="Year"
              value={newBook.publicationYear}
              onChange={(e) =>
                setNewBook({ ...newBook, publicationYear: e.target.value })
              }
            />
          </div>
        </div>
        <button className="btn btn-primary" onClick={addBook}>
          Add Book
        </button>
      </div>

      {/* Books Table */}
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
              <td
                dangerouslySetInnerHTML={{
                  __html: highlightText(book.title, searchTerm),
                }}
              />
              <td
                dangerouslySetInnerHTML={{
                  __html: highlightText(book.category, searchTerm),
                }}
              />
              <td
                dangerouslySetInnerHTML={{
                  __html: highlightText(book.author, searchTerm),
                }}
              />
              <td>{book.price}</td>
              <td>{book.publicationYear}</td>
              <td className="d-flex gap-3">
                <button
                  className="btn btn-warning"
                  onClick={() => editBook(book.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => confirmDelete(book.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
 }; 

export default ManageBooks;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ManageBooks = () => {
//   const [books, setBooks] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [newBook, setNewBook] = useState({
//     title: "",
//     category: "",
//     author: "",
//     price: "",
//     publicationYear: "",
//   });

//   // Fetch books data from the server on component mount
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/books")
//       .then((response) => {
//         setBooks(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching books:", error);
//       });
//   }, []);

//   // Add a new book to the list
//   const addBook = () => {
//     if (
//       !newBook.title ||
//       !newBook.category ||
//       !newBook.author ||
//       !newBook.price ||
//       !newBook.publicationYear
//     ) {
//       alert("All fields must be filled!");
//       return;
//     }
//     if (isNaN(newBook.price) || isNaN(newBook.publicationYear)) {
//       alert("Price and Publication Year must be valid numbers.");
//       return;
//     }

//     const newBookEntry = {
//       ...newBook,
//       id: books.length > 0 ? Math.max(...books.map((book) => book.id)) + 1 : 1,
//     };

//     axios
//       .post("http://localhost:5000/books", newBookEntry)
//       .then((response) => {
//         setBooks((prevBooks) => [...prevBooks, response.data]);
//       })
//       .catch((error) => console.error("Error adding book:", error));

//     // Clear the input fields after adding the book
//     setNewBook({
//       title: "",
//       category: "",
//       author: "",
//       price: "",
//       publicationYear: "",
//     });
//   };

//   // Edit a book by ID
//   const editBook = (bookId) => {
//     const bookToEdit = books.find((book) => book.id === bookId);
//     setNewBook(bookToEdit);
//   };

//   const confirmDelete = (bookId) => {
//     const isConfirmed = window.confirm("Are you sure you want to delete this book?");
//     if (isConfirmed) {
//       deleteBook(bookId);
//     }
//   };

//   // Delete a book by ID
//   const deleteBook = (bookId) => {
//     axios
//       .delete(`http://localhost:5000/books/${bookId}`)
//       .then(() => {
//         setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
//       })
//       .catch((error) => console.error("Error deleting book:", error));
//   };

//   // Filter books based on search term
//   const filteredBooks = books.filter(
//     (book) =>
//       book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.author.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Highlight search term in text
//   const highlightText = (text, term) =>
//     term
//       ? text.replace(new RegExp(term, "gi"), (match) => `<mark>${match}</mark>`)
//       : text;

//   return (

//     <div className="p-4">
//       <h3 className="mb-4">Manage Books</h3>

//       {/* Search Input */}
//       <div className="mb-4">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search by Title, Category, or Author"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {/* Add Book Form */}
//       <div className="mb-4">
//         <h5>Add New Book</h5>
//         <div className="row mb-3">
//           <div className="col-12 col-md-2">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Title"
//               value={newBook.title}
//               onChange={(e) =>
//                 setNewBook({ ...newBook, title: e.target.value })
//               }
//             />
//           </div>
//           <div className="col-12 col-md-3">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Category"
//               value={newBook.category}
//               onChange={(e) =>
//                 setNewBook({ ...newBook, category: e.target.value })
//               }
//             />
//           </div>
//           <div className="col-12 col-md-3">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Author"
//               value={newBook.author}
//               onChange={(e) =>
//                 setNewBook({ ...newBook, author: e.target.value })
//               }
//             />
//           </div>
//           <div className="col-12 col-md-2">
//             <input
//               type="number"
//               className="form-control"
//               placeholder="Price"
//               value={newBook.price}
//               onChange={(e) =>
//                 setNewBook({ ...newBook, price: e.target.value })
//               }
//             />
//           </div>
//           <div className="col-12 col-md-2">
//             <input
//               type="number"
//               className="form-control"
//               placeholder="Year"
//               value={newBook.publicationYear}
//               onChange={(e) =>
//                 setNewBook({ ...newBook, publicationYear: e.target.value })
//               }
//             />
//           </div>
//         </div>
//         <button className="btn btn-primary" onClick={addBook}>
//           Add Book
//         </button>
//       </div>

//       {/* Books Table */}
//       <table className="table table-bordered">
//         <thead className="thead-dark">
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Category</th>
//             <th>Author</th>
//             <th>Price</th>
//             <th>Publication Year</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredBooks.map((book) => (
//             <tr key={book.id}>
//               <td>{book.id}</td>
//               <td
//                 dangerouslySetInnerHTML={{
//                   __html: highlightText(book.title, searchTerm),
//                 }}
//               />
//               <td
//                 dangerouslySetInnerHTML={{
//                   __html: highlightText(book.category, searchTerm),
//                 }}
//               />
//               <td
//                 dangerouslySetInnerHTML={{
//                   __html: highlightText(book.author, searchTerm),
//                 }}
//               />
//               <td>{book.price}</td>
//               <td>{book.publicationYear}</td>
//               <td className="d-flex gap-3">
//                 <button
//                   className="btn btn-warning"
//                   onClick={() => editBook(book.id)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => confirmDelete(book.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ManageBooks;

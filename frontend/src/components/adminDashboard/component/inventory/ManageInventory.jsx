// // src/components/adminDashboard/component/inventory/ManageInventory.jsx
// src/components/adminDashboard/component/inventory/ManageInventory.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageInventory = () => {
  const [inventory, setInventory] = useState([]);
  const [ISBN, setISBN] = useState("");
  const [rank, setRank] = useState("");
  const [purchased, setPurchased] = useState("");
  const [searchISBN, setSearchISBN] = useState("");
  const [filteredInventory, setFilteredInventory] = useState([]);

  const fetchInventory = async () => {
    try {
      const response = await axios.get("http://localhost:6060/api/inventory/purchased/"+searchISBN);
    if(response.data.errorMsg){
      console.log("Error fetching inventory data:", error);
      console.log(response.data)
    }
    else{
      console.log(response)
      setInventory([response.data]);
      setFilteredInventory([response.data]);}
    } catch (error) {
      console.log("Error fetching inventory data:", error);
      alert("Inventory not found")
    }
  };
  // Fetch inventory data from the backend
  useEffect(() => {
    
    //fetchInventory();
  }, []);

  // Add a new item to the inventory
  const addItem = async () => {
    if (!ISBN || !rank || !purchased) {
      alert("All fields are required!");
      return;
    }

    const newItem = { ISBN, rank, purchased };

    try {
      const response = await axios.post("http://localhost:6060/api/inventory/post", newItem);
      setInventory((prevInventory) => [...prevInventory, response.data]);
      setFilteredInventory((prevInventory) => [...prevInventory, response.data]);
      setISBN("");
      setRank("");
      setPurchased("");
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  // Search inventory by ISBN
  const searchItem = () => {
    // if (!searchISBN) {
    //   alert("Please enter an ISBN to search.");
    //   return;
    // }

    // const filtered = inventory.filter((item) => item.ISBN === searchISBN);

    // if (filtered.length > 0) {
    //   setFilteredInventory(filtered);
    // } else {
    //   alert("Item not found.");
    //   setFilteredInventory([]);
    


    // }

    fetchInventory();
  };

  return (
    <div className="p-4">
      <h3 className="mb-4">Manage Inventory</h3>
      
      {/* Search Field for ISBN */}
      <input
        type="text"
        className="form-control"
        placeholder="Search by ISBN"
        value={searchISBN}
        onChange={(e) => setSearchISBN(e.target.value)}
      />
      <button className="btn btn-primary mt-2" onClick={searchItem}>
        Search
      </button>

      <hr />

      {/* Add New Inventory */}
      <input
        type="text"
        className="form-control"
        placeholder="ISBN (e.g., 978-3-16-148410-0)"
        value={ISBN}
        onChange={(e) => setISBN(e.target.value)}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Rank (e.g., 1 for Bad, 2 for Poor)"
        value={rank}
        onChange={(e) => setRank(e.target.value)}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Purchased (Purchased/Not Purchased)"
        value={purchased}
        onChange={(e) => setPurchased(e.target.value)}
      />
      <button className="btn btn-primary mt-2" onClick={addItem}>
        Add Item
      </button>

      {/* Inventory Table */}
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Rank</th>
            <th>Purchased</th>
          </tr>
        </thead>
        <tbody>
          {filteredInventory.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center">No items found</td>
            </tr>
          ) : (
            filteredInventory.map((item) => (
              <tr key={item.id}>
                <td>{item.purchaseLogs[0].id}</td>
                <td>{0}</td>
                <td>{item.purchased ? "Yes":"No"}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageInventory;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ManageInventory = () => {
//   const [inventory, setInventory] = useState([]); // State for inventory data
//   const [ISBN, setISBN] = useState("");
//   const [rank, setRank] = useState("");
//   const [purchased, setPurchased] = useState("");
//   const [searchISBN, setSearchISBN] = useState(""); // For searching by ISBN
//   const [filteredInventory, setFilteredInventory] = useState([]); // Filtered inventory data

//   // Fetch inventory data from the db.json
//   useEffect(() => {
//     const fetchInventory = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/inventory");
//         setInventory(response.data);
//         setFilteredInventory(response.data); // Set initial filtered inventory
//       } catch (error) {
//         console.error("Error fetching inventory data:", error);
//       }
//     };
//     fetchInventory();
//   }, []);

//   // Add a new item to the inventory
//   const addItem = async () => {
//     if (!ISBN || !rank || !purchased) {
//       alert("All fields are required!");
//       return;
//     }

//     const newItem = { ISBN, name: `Item ${ISBN}`, rank, purchased };

//     try {
//       // Post new item to db.json
//       const response = await axios.post("http://localhost:5000/inventory", newItem);
//       setInventory((prevInventory) => [...prevInventory, response.data]);
//       setFilteredInventory((prevInventory) => [...prevInventory, response.data]);
//       setISBN("");
//       setRank("");
//       setPurchased("");
//     } catch (error) {
//       console.error("Error adding item:", error);
//     }
//   };

//   // Search inventory by ISBN
//   const searchItem = () => {
//     if (!searchISBN) {
//       alert("Please enter an ISBN to search.");
//       return;
//     }

//     const filtered = inventory.filter((item) => item.ISBN === searchISBN);

//     if (filtered.length > 0) {
//       setFilteredInventory(filtered);
//     } else {
//       alert("Item not found.");
//       setFilteredInventory([]); // Reset filtered inventory if not found
//     }
//   };

//   return (
//     <div className="p-4">
//       <h3 className="mb-4">Manage Inventory</h3>
      
//       {/* Search Field for ISBN */}
//       <input
//         type="text"
//         className="form-control"
//         placeholder="Search by ISBN"
//         value={searchISBN}
//         onChange={(e) => setSearchISBN(e.target.value)}
//       />
//       <button className="btn btn-primary mt-2" onClick={searchItem}>
//         Search
//       </button>

//       <hr />

//       {/* Add New Inventory */}
//       <input
//         type="text"
//         className="form-control"
//         placeholder="ISBN (e.g., 978-3-16-148410-0)"
//         value={ISBN}
//         onChange={(e) => setISBN(e.target.value)}
//       />
//       <input
//         type="text"
//         className="form-control mt-2"
//         placeholder="Rank (e.g., 1 for Bad, 2 for Poor)"
//         value={rank}
//         onChange={(e) => setRank(e.target.value)}
//       />
//       <input
//         type="text"
//         className="form-control mt-2"
//         placeholder="Purchased (Purchased/Not Purchased)"
//         value={purchased}
//         onChange={(e) => setPurchased(e.target.value)}
//       />
//       <button className="btn btn-primary mt-2" onClick={addItem}>
//         Add Item
//       </button>

//       {/* Inventory Table */}
//       <table className="table table-bordered mt-4">
//         <thead>
//           <tr>
//             <th>ISBN</th>
//             <th>Rank</th>
//             <th>Purchased</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredInventory.length === 0 ? (
//             <tr>
//               <td colSpan="3" className="text-center">No items found</td>
//             </tr>
//           ) : (
//             filteredInventory.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.ISBN}</td>
//                 <td>{item.rank}</td>
//                 <td>{item.purchased}</td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ManageInventory;

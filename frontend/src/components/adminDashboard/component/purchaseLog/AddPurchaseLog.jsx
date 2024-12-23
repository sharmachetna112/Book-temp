// // src/components/adminDashboard/component/purchaseLog/AddPurchaseLog
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddPurchaseLog = () => {
  const [users, setUsers] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [userId, setUserId] = useState('');
  const [inventoryId, setInventoryId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Fetching the users and inventory items from API
    axios.get('http://localhost:6060/api/users')  // Actual API for users
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => console.error("There was an error fetching users!", error));
  
    axios.get('http://localhost:6060/api/inventory')  // Actual API for inventory
      .then(response => {
        setInventory(response.data);
      })
      .catch(error => console.error("There was an error fetching inventory!", error));
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create the purchase log object
    const newPurchaseLog = {
      userId: userId,
      inventoryId: inventoryId,
      purchaseDate: new Date().toISOString() // Set the purchase date to current date
    };
  
    // Make POST request to add purchase log
    axios.post('http://localhost:6060/api/purchaselog/post', newPurchaseLog)  // Actual API for adding purchase log
      .then(response => {
        setSuccessMessage('Purchase log added successfully!');
        setErrorMessage('');
      })
      .catch(error => {
        setErrorMessage('Error adding purchase log.');
        setSuccessMessage('');
      });
  };
  
  // useEffect(() => {
  //   // Fetching the users and inventory items from API
  //   axios.get('http://localhost:6060/api/permrole/post') // Adjust this endpoint as needed
  //     .then(response => {
  //       setUsers(response.data);
  //     })
  //     .catch(error => console.error("There was an error fetching users!", error));

  //   axios.get('http://localhost:6060/api/inventory/post') // Adjust this endpoint as needed
  //     .then(response => {
  //       setInventory(response.data);
  //     })
  //     .catch(error => console.error("There was an error fetching inventory!", error));
  // }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   // Create the purchase log object
  //   const newPurchaseLog = {
  //     userId: userId,
  //     inventoryId: inventoryId,
  //     purchaseDate: new Date().toISOString() // Set the purchase date to current date
  //   };

  //   // Make POST request to add purchase log
  //   axios.post('http://localhost:6060/api/purchaselog/post', newPurchaseLog)
  //     .then(response => {
  //       setSuccessMessage('Purchase log added successfully!');
  //       setErrorMessage('');
  //     })
  //     .catch(error => {
  //       setErrorMessage('Error adding purchase log.');
  //       setSuccessMessage('');
  //     });
  // };

  return (
    <div>
      <h4 className="mb-4">Add Purchase Log</h4>
      <form onSubmit={handleSubmit} className="form-group">
        <div className="mb-3">
          <label htmlFor="userSelect" className="form-label">User:</label>
          <select 
            id="userSelect" 
            className="form-control" 
            value={userId} 
            onChange={(e) => setUserId(e.target.value)} 
            required
          >
            <option value="">Select User</option>
            {users.map((user) => (
              <option key={user.userId} value={user.userId}>
                {user.firstName} {user.lastName}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="inventorySelect" className="form-label">Inventory:</label>
          <select 
            id="inventorySelect" 
            className="form-control" 
            value={inventoryId} 
            onChange={(e) => setInventoryId(e.target.value)} 
            required
          >
            <option value="">Select Inventory Item</option>
            {inventory.map((item) => (
              <option key={item.inventoryId} value={item.inventoryId}>
                {item.isbn} - {item.ranks} (Status: {item.purchased ? 'Purchased' : 'Not Purchased'})
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-success">Add Purchase Log</button>
      </form>

      {successMessage && <div className="mt-3 alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="mt-3 alert alert-danger">{errorMessage}</div>}
    </div>
  );
};

export default AddPurchaseLog;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AddPurchaseLog = () => {
//   const [users, setUsers] = useState([]);
//   const [inventory, setInventory] = useState([]);
//   const [userId, setUserId] = useState('');
//   const [inventoryId, setInventoryId] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   useEffect(() => {
//     // Fetching the users and inventory items from API
//     axios.get('http://localhost:5000/users')  // Mock API for users
//       .then(response => {
//         setUsers(response.data);
//       })
//       .catch(error => console.error("There was an error fetching users!", error));

//     axios.get('http://localhost:5000/inventory')  // Mock API for inventory
//       .then(response => {
//         setInventory(response.data);
//       })
//       .catch(error => console.error("There was an error fetching inventory!", error));
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Create the purchase log object
//     const newPurchaseLog = {
//       userId: userId,
//       inventoryId: inventoryId,
//       purchaseDate: new Date().toISOString() // Set the purchase date to current date
//     };

//     // Make POST request to add purchase log
//     axios.post('http://localhost:5000/purchaselog', newPurchaseLog)  // Mock API for adding purchase log
//       .then(response => {
//         setSuccessMessage('Purchase log added successfully!');
//         setErrorMessage('');
//       })
//       .catch(error => {
//         setErrorMessage('Error adding purchase log.');
//         setSuccessMessage('');
//       });
//   };

//   return (
//     <div>
//       <h4 className="mb-4">Add Purchase Log</h4>
//       <form onSubmit={handleSubmit} className="form-group">
//         <div className="mb-3">
//           <label htmlFor="userSelect" className="form-label">User:</label>
//           <select 
//             id="userSelect" 
//             className="form-control" 
//             value={userId} 
//             onChange={(e) => setUserId(e.target.value)} 
//             required
//           >
//             <option value="">Select User</option>
//             {users.map((user) => (
//               <option key={user.userId} value={user.userId}>
//                 {user.firstName} {user.lastName}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="mb-3">
//           <label htmlFor="inventorySelect" className="form-label">Inventory:</label>
//           <select 
//             id="inventorySelect" 
//             className="form-control" 
//             value={inventoryId} 
//             onChange={(e) => setInventoryId(e.target.value)} 
//             required
//           >
//             <option value="">Select Inventory Item</option>
//             {inventory.map((item) => (
//               <option key={item.inventoryId} value={item.inventoryId}>
//                 {item.isbn} - {item.ranks} (Status: {item.purchased ? 'Purchased' : 'Not Purchased'})
//               </option>
//             ))}
//           </select>
//         </div>

//         <button type="submit" className="btn btn-success">Add Purchase Log</button>
//       </form>

//       {successMessage && <div className="mt-3 alert alert-success">{successMessage}</div>}
//       {errorMessage && <div className="mt-3 alert alert-danger">{errorMessage}</div>}
//     </div>
//   );
// };

// export default AddPurchaseLog;

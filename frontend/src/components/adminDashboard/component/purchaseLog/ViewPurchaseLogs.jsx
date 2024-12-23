// src/components/adminDashboard/component/purchaseLog/ViewPurchaseLog

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewPurchaseLogs = () => {
  const [userId, setUserId] = useState('');
  const [purchaseLogs, setPurchaseLogs] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Fetch purchase logs for the selected user
    axios.get(`http://localhost:6060/api/purchaselog/get/${userId}`)  // Actual API for getting purchase logs
      .then(response => {
        console.log(response.data)
        setPurchaseLogs(response.data);
        setErrorMessage('');
      })
      .catch(error => {
        setErrorMessage('Error fetching purchase logs.');
        setPurchaseLogs([]);
      });
  };
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   // Fetch purchase logs for the selected user
  //   axios.get(`http://localhost:5000/purchaselog?userId=${userId}`)  // Mock API for getting purchase logs
  //     .then(response => {
  //       setPurchaseLogs(response.data);
  //       setErrorMessage('');
  //     })
  //     .catch(error => {
  //       setErrorMessage('Error fetching purchase logs.');
  //       setPurchaseLogs([]);
  //     });
  // };

  return (
    <div>
      <h4 className="mb-4">View Purchase Logs</h4>
      <form onSubmit={handleSubmit} className="form-inline mb-4">
        <div className="form-group mr-3">
          <label htmlFor="userIdInput" className="form-label">User ID:</label>
          <input
            type="number"
            id="userIdInput"
            className="form-control"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter User ID"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">View Purchase Logs</button>
      </form>

      {errorMessage && <div className="mt-3 alert alert-danger">{errorMessage}</div>}

      {purchaseLogs.length > 0 ? (
        <div className="table-responsive mt-4">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Inventory ID</th>
                <th>Purchase Date</th>
              </tr>
            </thead>
            <tbody>
            {Array.isArray(purchaseLogs) && purchaseLogs.map((log, index) => (
  // Render your log item here
  <tr key={log.inventoryId}>
                  <td>{log.userId}</td>
                  <td>{log.inventoryId}</td>
                  <td>{log.purchaseDate}</td>
                </tr>
))}

              {/* {purchaseLogs.map((log) => (
                
              ))} */}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No purchase logs available for this user.</p>
      )}
    </div>
  );
};

export default ViewPurchaseLogs;

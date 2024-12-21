// src/components/adminDashboard/component/purchaseLog/ManagePurchaseLog

import React, { useState } from 'react';
import AddPurchaseLog from './AddPurchaseLog';
import ViewPurchaseLogs from './ViewPurchaseLogs';

const ManagePurchaseLog = () => {
  const [isAddMode, setIsAddMode] = useState(true);

  const toggleView = () => {
    setIsAddMode(!isAddMode);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Manage Purchase Log</h3>
      
      <div className="mb-4">
        <button 
          className="btn btn-primary" 
          onClick={toggleView}
        >
          {isAddMode ? 'View Purchase Logs' : 'Add Purchase Log'}
        </button>
      </div>

      <div>
        {isAddMode ? (
          <AddPurchaseLog />
        ) : (
          <ViewPurchaseLogs />
        )}
      </div>
    </div>
  );
};

export default ManagePurchaseLog;

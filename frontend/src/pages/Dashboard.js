import React from "react"; // ✅ Add this line

const Dashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Admin Dashboard</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="p-4 bg-blue-100 rounded">Total Users: 500</div>
        <div className="p-4 bg-green-100 rounded">Active Schemes: 20</div>
        <div className="p-4 bg-red-100 rounded">Pending Grievances: 15</div>
      </div>
    </div>
  );
};

export default Dashboard;

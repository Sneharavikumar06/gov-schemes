import React from "react"; // Import React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from "./components/Auth/Register";
import SchemeRecommendation from "./components/SchemeRecommendation/SchemeRecommendation";
import Grievance from "./components/Grievance/Grievance";
import Navbar from "./components/Layout/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter> {/* Wrap everything inside BrowserRouter */}
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-4">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/schemes" element={<SchemeRecommendation />} />
          <Route path="/grievance" element={<Grievance />} />
          <Route path="/dashboard" element={<Dashboard />} /> {/* Remove if Dashboard does not exist */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

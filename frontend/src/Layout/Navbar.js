import React from "react"; // Add this line
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Gov-Schemes</h1>
        <div>
          <Link to="/" className="mx-2 hover:underline">Home</Link>
          <Link to="/schemes" className="mx-2 hover:underline">Schemes</Link>
          <Link to="/grievance" className="mx-2 hover:underline">Grievance</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

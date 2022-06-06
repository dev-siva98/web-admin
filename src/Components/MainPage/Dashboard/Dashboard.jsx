import React from "react";
import Cards from "../Cards/Cards";
import "./Dashboard.css";
const MainDash = () => {
  return (
    <div className="admin-main-dash">
      <h1>Dashboard</h1>
      <Cards />
    </div>
  );
};

export default MainDash;

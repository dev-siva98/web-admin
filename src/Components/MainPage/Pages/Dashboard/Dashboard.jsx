import React from "react";
import Cards from "./Cards/Cards";
import "./Dashboard.css";
import Table from '../../Table/Table'
import OrderDetails from '../../DetailsModal/OrderDetails/OrderDetails'

const MainDash = () => {

  return (
    <div className="admin-main-dash">
      <h1>Dashboard</h1>
      <Cards />
      <Table route={'orders'} component={OrderDetails} />
    </div>
  );
};

export default MainDash;

import React, { useContext, useEffect } from "react";
import Cards from "./Cards/Cards";
import "./Dashboard.css";
import Table from '../../Table/Table'
import OrderDetails from '../../DetailsModal/OrderDetails/OrderDetails'
import { SelectMenuContext } from "../../../../AppContext";

const MainDash = () => {

  const { setSelected } = useContext(SelectMenuContext)
  
  useEffect(() => {
    setSelected(0)
  }, [])

  return (
    <div className="admin-main-dash">
      <div className="admin-main-dash-container">
        <h1>Dashboard</h1>
        <Cards />
      </div>
      <Table route={'orders'} component={OrderDetails} />
    </div>
  );
};

export default MainDash;

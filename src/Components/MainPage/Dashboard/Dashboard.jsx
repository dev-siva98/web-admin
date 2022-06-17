import React, { useContext, useEffect } from "react";
import Cards from "./Cards/Cards";
import "./Dashboard.css";
import OrderDetails from '../../DetailsModal/OrderDetails/OrderDetails'
import { TableContext } from '../../../AppContext'

const MainDash = () => {

  const { setTableRouterData } = useContext(TableContext)

  useEffect(() => {
    setTableRouterData({
      route: 'orders',
      component: OrderDetails
    })
  }, [])

  return (
    <div className="admin-main-dash">
      <h1>Dashboard</h1>
      <Cards />
    </div>
  );
};

export default MainDash;

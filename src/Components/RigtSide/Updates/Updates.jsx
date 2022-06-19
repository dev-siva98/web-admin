import React, { useEffect, useState } from "react";
import "./Updates.css";
import axios from "../../../axios";
import TimeAgo from 'react-timeago';


const Updates = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    axios.get('orders').then(res => {
      setOrders(res.data)
    }).catch(err => {
      alert('' + err)
    })
  }, [])

  return (
    <div className="admin-updates">
      {orders?.slice(0).reverse().map((order, index) => {
        return (
          <div className="admin-updates-item"
            key={index}>
            <img src={`https://ui-avatars.com/api/?name=${order.userName}&length=1&rounded=true&background=random&bold=true`} alt="profile" />
            <div className="admin-updates-item-notification">
              <div style={{ marginBottom: '0.5rem' }}>
                <span>{order.userName}</span>
                <span> has ordered {order.products[0].pname}</span>
              </div>
              <span>
                <TimeAgo
                  date={order.createdAt} />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;

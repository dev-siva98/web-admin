import React from "react";
import "./Updates.css";
import { updatesData } from "../../../Data/Data";

const Updates = () => {
  return (
    <div className="admin-updates">
      {updatesData.map((update, index) => {
        return (
          <div className="admin-updates-item"
            key={index}>
            <img src={update.img} alt="profile" />
            <div className="admin-updates-item-notification">
              <div style={{ marginBottom: '0.5rem' }}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
              <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;

import React, { useEffect, useRef, useState } from "react";
import "./Sidebar.css";
import { UilSignOutAlt, UilBars, UilTimes } from "@iconscout/react-unicons";
import { SidebarData } from "../../Data/Data";
import { motion } from "framer-motion";

const Sidebar = () => {

  const [selected, setSelected] = useState(0);
  const [click, setClick] = useState(true)

  const handleClick = (index) => {
    setSelected(index)
    setClick(!click)
  }


  const ref = useRef()

  useEffect(() => {
    const detectClick = e => {
      if (click && ref.current && !ref.current.contains(e.target)) {
        setClick(false)
      }
    }
    document.addEventListener("mousedown", detectClick)

    return () => {
      document.removeEventListener("mousedown", detectClick)
    }
  }, [click])

  return (
    <motion.div className='admin-sidebar'>
      {/* logo */}
      <div className="admin-sidebar-logo">
        <span>
          make<span>MY</span>cake
        </span>
      </div>
      <div className="admin-sidebar-navigation">
        <div className="admin-sidebar-toggle">
          {click ? <UilTimes/> : <UilBars/>}
        </div>
        <div className={`admin-sidebar-menu ${click ? 'active' : ''}`}>
          {SidebarData.map((item, index) => {
            return (
              <div
                className={`admin-sidebar-menu-item ${selected === index ? "active" : ""}`}
                key={index}
                onClick={() => handleClick(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;

import React, { useEffect, useRef, useState } from "react";
import "./Sidebar.css";
import { UilBars, UilTimes } from "@iconscout/react-unicons";
import { SidebarData } from "../../Data/Data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const [selected, setSelected] = useState(0); // to set active navigation style
  const [click, setClick] = useState(true);  // to open mobile navigation

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
          {click ? <UilTimes /> : <UilBars />}
        </div>
        <div className={`admin-sidebar-menu ${click ? 'active' : ''}`} ref={ref}>
          {SidebarData.map((item, index) => {
            return (
              <Link
                to={item.heading}
                key={index}
              >
                <div
                  className={`admin-sidebar-menu-item ${selected === index ? "active" : ""}`}
                  onClick={() => handleClick(index)}
                >
                  <item.icon />
                  <span>{item.heading}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;

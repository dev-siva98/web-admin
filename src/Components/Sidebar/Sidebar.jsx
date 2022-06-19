import React, { useContext, useEffect, useRef, useState } from "react";
import "./Sidebar.css";
import { UilBars, UilTimes, UilSignOutAlt } from "@iconscout/react-unicons";
import { sidebarData } from "../../Data/Data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TableContext } from '../../AppContext'

const Sidebar = () => {
  const [click, setClick] = useState(false);  // to open mobile navigation
  const [selected, setSelected] = useState(); // to set active navigation style
  const { tableRouterData } = useContext(TableContext)
  const { selectionIndex } = tableRouterData

  const handleClick = (index) => {
    setSelected(index)
    setClick(!click)
  }

  const handleSignout = () => {
    setClick(!click)
  }


  const ref = useRef()

  useEffect(() => {
    setSelected(selectionIndex)
  }, [selectionIndex])

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
        <div className="admin-sidebar-toggle"
          onClick={() => setClick(!click)}>
          {click ? <UilTimes /> : <UilBars />}
        </div>
        <div className={`admin-sidebar-menu ${click ? 'active' : ''}`} ref={ref}>
          {
            sidebarData.map((item, index) => {
              return (
                <Link
                  to={item.link}
                  key={index}
                  className='admin-sidebar-menu-link'
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
            })
          }
          <div
            className='admin-sidebar-menu-item'
            onClick={() => handleSignout()}
          >
            <UilSignOutAlt />
            <span>Signout</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;

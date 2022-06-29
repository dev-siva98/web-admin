import React, { useState } from "react";
import "./Card.css";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import { Backdrop } from "@mui/material";

// parent Card

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </>
  );
};

// Compact Card
function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <div
      className="admin-card-compact"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExpanded}
    >
      <div className="admin-card-compact-radial">
        {/* <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        /> */}
        <span>{param.title}</span>
      </div>
      <div className="admin-card-compact-detail">
        <Png />
        <span>&#8377; {param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {
  const options = {
    dropShadow: {
      enabled: false,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: "#000",
      opacity: 0.35,
    },

    fill: {
      colors: ["#fff"],
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["white"],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    grid: {
      show: true,
    },
    xaxis: {
      type: "datetime",
      categories: param.date
    },
  }

  return (
    <Backdrop
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <div
        className="admin-card-expanded"
        style={{
          background: param.color.backGround
        }}
        layoutId="expandableCard"
      >
        <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
          <UilTimes onClick={setExpanded} />
        </div>
        <span>{param.title}</span>
        <div className="admin-card-expanded-chart-container">
          <Chart options={options} series={param.series} type="bar" />
        </div>
        <span>Last 24 hours</span>
      </div>
    </Backdrop>
  );
}

export default Card;

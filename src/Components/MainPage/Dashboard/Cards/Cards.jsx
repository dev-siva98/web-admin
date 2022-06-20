import React, { useEffect, useState } from "react";
import "./Cards.css";
import axios from '../../../../axios'
import Card from "./Card/Card";
import {
  UilClipboardAlt,
  UilUsdSquare,
  UilMoneyWithdrawal
} from "@iconscout/react-unicons";

const Cards = () => {

  const [admin, setAdmin] = useState()

  useEffect(() => {
    axios.get('dashboard')
      .then(res => {
        setAdmin(res.data)
      })
  }, [])

  const cardsData = [
    {
      title: "Online",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      value: admin?.online,
      png: UilUsdSquare,
      series: [
        {
          name: "Sales",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "COD",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 80,
      value: admin?.cod,
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Revenue",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
    {
      title: "Total",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 60,
      value: admin?.total,
      png: UilClipboardAlt,
      series: [
        {
          name: "Expenses",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  ]

  return (
    <div className="admin-cards">
      {cardsData?.map((card, index) => {
        return (
          <div className="admin-cards-parent-container" key={index}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        )
      })}
    </div>
  );
};

export default Cards;

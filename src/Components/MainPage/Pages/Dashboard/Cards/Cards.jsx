import React, { useEffect, useState } from "react";
import "./Cards.css";
import axios from '../../../../../axios'
import Card from "./Card/Card";
import {
  UilClipboardAlt,
  UilUsdSquare,
  UilMoneyWithdrawal
} from "@iconscout/react-unicons";

const Cards = () => {

  const [admin, setAdmin] = useState()
  const [online, setOnline] = useState()
  const [cod, setCod] = useState()
  const [total, setTotal] = useState()

  useEffect(() => {
    axios.get('dashboard')
      .then(res => {
        setAdmin(res.data.dashboard)
        let online = {
          data: [],
          date: []
        }
        let cod = {
          data: [],
          date: []
        }
        let total = {
          data: [],
          date: []
        }
        let date = new Date()
        res.data.orders.forEach(data => {
          if (new Date(data.createdAt) > date.setMonth(date.getMonth() - 1)) {
            if (data.paymentMode === 'online') {
              online.data.push(data.total)
              online.date.push(data.createdAt)
            }
            else if (data.paymentMode === 'cod') {
              cod.data.push(data.total)
              cod.date.push(data.createdAt)
            }
            total.data.push(data.total)
            total.date.push(data.createdAt)
          }
        })
        setOnline(online)
        setCod(cod)
        setTotal(total)
        console.log(online)
      })
      .catch(err => {
        alert('' + err)
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
      date: online?.date,
      series: [
        {
          name: "Online",
          data: online?.data
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
      date: cod?.date,
      series: [
        {
          name: "COD",
          data: cod?.data,
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
      date: total?.date,
      series: [
        {
          name: "Total",
          data: total?.data,
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
              date={card.date}
              series={card.series}
            />
          </div>
        )
      })}
    </div>
  );
};

export default Cards;

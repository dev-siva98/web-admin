import React from "react";
import "./Cards.css";
import { cardsData } from "../../../../Data/Data";

import Card from "./Card/Card";

const Cards = () => {
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

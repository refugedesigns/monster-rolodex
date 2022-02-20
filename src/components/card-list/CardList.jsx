import React from "react";
import CardItem from "../card-item/CardItem";
import "./card-list.styles.css";

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <CardItem key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;

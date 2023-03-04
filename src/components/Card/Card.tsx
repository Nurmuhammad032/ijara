import "./Card.scss";
import React from "react";

interface Props {
  title: string;
  desc: string;
  isIcon: boolean;
  icon?: React.ReactNode;
}

const Card = ({ title, desc, isIcon, icon }: Props) => {
  return (
    <div className="app-card__wrapper">
      <div>
        {isIcon ? (
          <span className="app__card-icon">{icon}</span>
        ) : (
          <h1>{title}</h1>
        )}
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;

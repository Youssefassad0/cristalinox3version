import React from "react";
import "./Cards.css";
import CardItem from "./CardItems";

function Cards() {
  return (
    <div className="cards">
      <h1>Découvrez ces destinations INCROYABLES !</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/modern-staircase.jfif"
              text="Escaliers en acier inoxydable sur mesure pour des intérieurs modernes"
              label="Décoration intérieure"
              path="/projets"
            />
            <CardItem
              src="images/industrial-piping.jfif"
              text="Solutions de tuyauterie industrielle de haute qualité pour votre entreprise"
              label="Tuyauterie"
              path="/services"
            />
            <CardItem
              src="images/metal-gate.jfif"
              text="Portails en métal élégants et durables adaptés à vos besoins"
              label="Métallerie"
              path="/produits"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

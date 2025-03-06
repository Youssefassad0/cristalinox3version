import React from "react";
import "./Cards.css";
import CardItem from "./CardItems";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/modern-staircase.jfif"
              text="Custom-designed stainless steel staircases for modern interiors"
              label="Home Decor"
              path="/projects"
            />
            <CardItem
              src="images/industrial-piping.jfif"
              text="High-quality industrial piping solutions for your business"
              label="Tuyauterie"
              path="/services"
            />
            <CardItem
              src="images/metal-gate.jfif"
              text="Elegant and durable metal gates tailored to your needs"
              label="Ironwork"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <Link className="cards__item__link" to={props.path}>
        <figure className="cards__item__pic-wrap" data-category={props.label}>
          <img
            className="cards__item__img"
            alt="cristal inox product"
            src={props.src}
          />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{props.text}</h5>
        </div>
      </Link>
    </>
  );
}

export default CardItem;

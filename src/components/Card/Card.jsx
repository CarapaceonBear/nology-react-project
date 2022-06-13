import React from "react";
import "./Card.scss";

const Card = ({beer, hidden}) => {

  const {name, image_url, tagline,} = beer

  let nameClass = "card__name";
  if (name.length >= 18) {
    nameClass = "card__name--small"
  };
  let taglineClass = "card__tagline";
  if (tagline.length >= 50) {
    taglineClass = "card__tagline--small"
  };

  return (
    <div className="card" >
      <h2 className={nameClass} >{name}</h2>
      <img className="card__image" src={image_url} alt={name} />
      <p className={taglineClass}>{tagline}</p>
    </div>
  )
}

export default Card
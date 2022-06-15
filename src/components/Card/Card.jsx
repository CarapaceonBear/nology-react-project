import React from "react";
import "./Card.scss";

const Card = ({beer, hidden, onClick}) => {

  const {name, image_url, tagline} = beer

  let hiddenClass = "card";
  if (hidden) {
    hiddenClass = "card hidden"
  };

  let nameClass = "card__name";
  if (name.length >= 18) {
    nameClass = "card__name--small"
  };
  let taglineClass = "card__tagline";
  if (tagline.length >= 50) {
    taglineClass = "card__tagline--small"
  };

  return (
    <div className={hiddenClass} >
      <h2 className={nameClass} >{name}</h2>
      <img className="card__image" src={image_url} alt={name} />
      <p className={taglineClass}>{tagline}</p>
      <button className="card__button" type="button" name={name} onClick={onClick}></button>
    </div>
  )
}

export default Card
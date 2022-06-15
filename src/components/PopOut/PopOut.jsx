import React from "react";
import "./PopOut.scss"

const PopOut = ({beer, onClick}) => {

  if (beer != null) {
    const {name, image_url, tagline, first_brewed, description, abv, ph, ingredients, hops, food_pairing, brewers_tips} = beer;
    return (
      <div className="pop-out" onClick={onClick}>
        <i class="fa-solid fa-xmark fa-2xl"></i>
        <h2 className="pop-out__name">{name}</h2>
        <img className="pop-out__image" src={image_url} alt={name} />
        <h3 className="pop-out__tagline">{tagline}</h3>
        <div className="pop-out__stats">
          <h4 className="pop-out__stat-text">{abv}</h4>
          <h4 className="pop-out__stat-text">{ph}</h4>
          <h4 className="pop-out__stat-text">{first_brewed}</h4>
        </div>
        <div className="pop-out__description">
          <p className="pop-out__desc--copy">{description}</p>
          <p className="pop-out__desc--list">{ingredients[0]}</p>
          <h4 className="pop-out__desc--aside">{food_pairing}</h4>
          <p className="pop-out__desc--copy">{brewers_tips}</p>
          <p className="pop-out__desc--list">{hops}</p>
        </div>
      </div>
    )
  }
}

export default PopOut
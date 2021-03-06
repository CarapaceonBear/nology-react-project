import React from "react";
import "./PopOut.scss"

const PopOut = ({beer, onClick}) => {

  if (beer != null) {
    const {name, image_url, tagline, first_brewed, description, abv, ph, food_pairing} = beer;

    return (
      <>
        <div className="overlay"></div>
        <div className="pop-out">
            <i className="fa-solid fa-xmark fa-2xl pop-out__cross" onClick={onClick} data-testid="cross-icon"></i>
            <h2 className="pop-out__name">{name}</h2>
            <section className="pop-out__top">
                <img className="pop-out__image" src={image_url} alt={name} />
                <div className="pop-out__stats">
                    <h4 className="pop-out__stat-text">ABV : {abv}</h4>
                    <h4 className="pop-out__stat-text">pH : {ph}</h4>
                    <h4 className="pop-out__stat-text">First Brewed, {first_brewed}</h4>
                </div>
            </section>
            <h3 className="pop-out__tagline">{tagline}</h3>
            <section className="pop-out__bottom">
                <div className="pop-out__description">
                    <p className="pop-out__copy">{description}</p>
                </div>
                <div className="pop-out__pairing-list">
                    <p className="pop-out__subheading">Food Pairings</p>
                    <p className="pop-out__copy">{food_pairing.join("; ")}</p>
                </div>
            </section>
        </div>
      </>
    )
  }
}

export default PopOut
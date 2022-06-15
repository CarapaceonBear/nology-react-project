import React from 'react';
import "./CardList.scss";
import Card from "../../components/Card/Card";

const CardList = ({beersArray, filterAcidic}) => {

  if (filterAcidic) {
    beersArray = beersArray.filter((beer) => {
      return (beer.ph < 4 && beer.ph != null)
    })
  }

  return (
    <div className="card-list">
      {(beersArray || []).map((beer, index) => {
        if (index >= 25) {
          return <Card key={"beer " + index} beer={beer} hidden={true} />
        } else {
          return <Card key={"beer " + index} beer={beer} hidden={false} />
        }
      })}

    </div>
  )
}

export default CardList
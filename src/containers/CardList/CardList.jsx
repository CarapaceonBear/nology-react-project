import React from 'react';
import "./CardList.scss";
import Card from "../../components/Card/Card";

const CardList = ({beersArray}) => {

  return (
    <div className="card-list">
      {(beersArray || []).map((beer, index) => {
        return <Card key={"beer " + index} beer={beer} hidden={false} />
      })}

    </div>
  )
}

export default CardList
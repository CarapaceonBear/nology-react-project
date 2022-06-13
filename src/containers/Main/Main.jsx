import React from 'react';
import "./Main.scss";
import CardList from '../CardList/CardList';

const Main = ({beersArray}) => {

  return (
    <div className="main">
      <CardList beersArray={beersArray} />
    </div>
  )
}

export default Main
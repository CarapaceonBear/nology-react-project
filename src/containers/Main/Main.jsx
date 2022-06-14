import React from 'react';
import "./Main.scss";
import CardList from '../CardList/CardList';

const Main = ({beersArray, filterAcidic}) => {

  return (
    <div className="main">
      <CardList beersArray={beersArray} filterAcidic={filterAcidic} />
    </div>
  )
}

export default Main
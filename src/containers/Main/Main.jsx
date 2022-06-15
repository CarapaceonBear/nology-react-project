import React from 'react';
import "./Main.scss";
import CardList from '../CardList/CardList';

const Main = ({beersArray, filterAcidic, searchTerm}) => {

  return (
    <div className="main">
      <CardList beersArray={beersArray} filterAcidic={filterAcidic} searchTerm={searchTerm} />
    </div>
  )
}

export default Main
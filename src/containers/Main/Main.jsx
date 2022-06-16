import React, {useState} from 'react';
import "./Main.scss";
import CardList from '../CardList/CardList';
import PageNav from '../PageNav/PageNav';

const Main = ({beersArray, filterAcidic, searchTerm}) => {

  const [pageNumber, setPageNumber] = useState(1);

  const buttonClick = (event) => {
    switch (event.target.value) {
      case ("pageForward"):
        setPageNumber(pageNumber + 1);
        break;
      case ("pageBack"):
        if (pageNumber > 1) {
          setPageNumber(pageNumber - 1);
        }
        break;
    }
  }

  return (
    <div className="main">
      <CardList beersArray={beersArray} filterAcidic={filterAcidic} searchTerm={searchTerm} number={pageNumber} />
      <PageNav number={pageNumber} buttonClick={buttonClick} />
    </div>
  )
}

export default Main
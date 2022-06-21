import React, {useState} from 'react';
import "./Main.scss";
import CardList from '../CardList/CardList';
import PageNav from '../PageNav/PageNav';
import logo from "../../assets/images/Brewdog_logo_2022.png";

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
      <a href="https://www.brewdog.com/uk">
        <img className="main__image" src={logo} alt="brewdog" />
      </a>
      <PageNav number={pageNumber} buttonClick={buttonClick} />
      <CardList beersArray={beersArray} filterAcidic={filterAcidic} searchTerm={searchTerm} number={pageNumber} />
    </div>
  )
}

export default Main
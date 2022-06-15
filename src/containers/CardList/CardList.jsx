import React, {useState} from 'react';
import "./CardList.scss";
import Card from "../../components/Card/Card";
import PopOut from "../../components/PopOut/PopOut";

const CardList = ({beersArray, filterAcidic, searchTerm}) => {

  const [selectedBeer, setSelectedBeer] = useState(null);

  if (filterAcidic) {
    beersArray = beersArray.filter((beer) => {
      return (beer.ph < 4 && beer.ph != null)
    })
  }

  let search = beersArray;
  if (searchTerm !== "") {
    const searchResults = [...beersArray].filter((beer) => {
      return (beer.name.toLowerCase().includes(searchTerm.toLowerCase()))
    });
    search = searchResults;
  }

  const showPopOut = (event) => {
    const index = beersArray.findIndex(beer => beer.name == event.target.name)
    if (index > -1) {
      setSelectedBeer(beersArray[index])
    }
  }

  const resetPopOut = () => {
    setSelectedBeer(null);
  }

  return (
    <div className="card-list">
      {(search || []).map((beer, index) => {
        if (index >= 25) {
          return <Card key={"beer " + index} beer={beer} hidden={true} />
        } else {
          return <Card key={"beer " + index} beer={beer} hidden={false} onClick={showPopOut} />
        }
      })}
      <PopOut beer={selectedBeer} onClick={resetPopOut} />
      
    </div>
  )
}

export default CardList
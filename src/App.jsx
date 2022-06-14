import React, {useEffect, useState} from "react";
import './App.scss';
import Main from "../src/containers/Main/Main";
import NavBar from "../src/containers/NavBar/NavBar";

function App() {

  const [beersArray, setBeersArray] = useState();
  const [filters, setFilters] = useState([false, false, false]);
  const [trigger, setTrigger] = useState("start")

  useEffect(() => {
    console.log("api call");
    console.log(trigger);
    getBeers(filters).then(items => setBeersArray(items))
  }, [trigger]);

  const getBeers = async (filters) => {
    let fetchResult = [0];
    let pageNumber = 1;
    let results = [];
    while (fetchResult.length > 0) {
      let url = `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=80`;
      if (filters[0]) {
        url += `&abv_gt=6`;
      }
      if (filters[1]) {
        url += `&brewed_before=01-2010`;
      }
      let request = await fetch(url);
      fetchResult = await request.json();
      results.push(...fetchResult);
      pageNumber++;
    }
    return results;
  };

  const handleFilter = (event) => {
    let returnArray = filters;
    switch (event.target.value) {
      case "high-abv":
        returnArray[0] = event.target.checked;
        break;
      case "classic":
        returnArray[1] = event.target.checked;
        break;
      case "acidic":
        returnArray[2] = event.target.checked;
        break;
      default:
        returnArray = [false, false, false];
    }
    setFilters(returnArray);
    setTrigger(filters.toString());
  }

  return (
    <div className="App">
      <NavBar handleFilter={handleFilter} />
      <Main beersArray={beersArray} filterAcidic={filters[2]} />
    </div>
  );
}

export default App;

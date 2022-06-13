import React, {useEffect, useState} from "react";
import './App.scss';
import Main from "../src/containers/Main/Main";
import NavBar from "../src/containers/NavBar/NavBar";

function App() {

  const [beersArray, setBeersArray] = useState();

  useEffect(() => {
    getBeers().then(items => setBeersArray(items))
    console.log("api call");
  }, []);

  const getBeers = async () => {
    let fetchResult = [0];
    let pageNumber = 1;
    let results = [];
    while (fetchResult.length > 0) {
      let request = await fetch(`https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=80`);
      fetchResult = await request.json();
      results.push(...fetchResult);
      pageNumber++;
    }
    return results;
  };

  return (
    <div className="App">
      <NavBar />
      <Main beersArray={beersArray} />
    </div>
  );
}

export default App;

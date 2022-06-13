import React, {useEffect, useState} from "react";
import './App.scss';
import Main from "../src/containers/Main/Main";

function App() {

  const [beersArray, setBeersArray] = useState();

  useEffect(() => {
    getBeers().then(items => setBeersArray(items))
  }, []);

  const getBeers = async () => {
    const data = await fetch("https://api.punkapi.com/v2/beers?page=1");
    return await data.json();
  };

  return (
    <div className="App">
      <Main beersArray={beersArray} />
    </div>
  );
}

export default App;

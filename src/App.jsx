import React, {useEffect, useState} from "react";
import './App.scss';
import Main from "../src/containers/Main/Main";
import NavBar from "../src/containers/NavBar/NavBar";

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
      <NavBar />
      <Main beersArray={beersArray} />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./Coin/Coin";
import utils from "./utils";

const API_KEY = utils.API_KEY
function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(API_KEY)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const searchedCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coint-text">Search</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coint-input"
            onChange={handleSearch}
          ></input>
        </form>
      </div>
      {searchedCoins.map((coin) => {
        return (
          <Coin
            id={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            price={coin.current_price}
            volume={coin.total_volume}
            mktcap={coin.market_cap}
          />
        );
      })}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Coin, LegendBar } from "./Coin/Coin";
import { CURRENCY_API } from "./utils";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState("usd");
  const [currencyData, setCurrencyData] = useState("");

  useEffect(() => {
    const COIN_GECKO_API = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
    axios
      .get(CURRENCY_API)
      .then((res) => {
        setCurrencyData(res.data[currency.toUpperCase()]);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(COIN_GECKO_API)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, [currency]);

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
          <select onChange={(e) => setCurrency(e.target.value)}>
            <option value="usd">USD</option>
            <option value="brl">BRL</option>
            <option value="eur">EUR</option>
          </select>
        </form>
      </div>
      <LegendBar />
      {searchedCoins.map((coin) => {
        return (
          <Coin
            id={coin.id}
            currency={currency}
            currencySymbol={currencyData.symbol_native}
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

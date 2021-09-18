import React from "react";
import "./Coin.scss";

const Coin = ({ name, image, symbol, price, volume, mktcap }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("desgraça");
  };
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="coin" onClick={handleClick}></img>
          <h1>{name}</h1>
          <p className="coint-symbol">{symbol.toUpperCase()}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>
          <p className="coin-mktcap">${mktcap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;

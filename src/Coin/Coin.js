import react from "react";
import "./Coin.scss";
import GetHistory from "./GetHistory";
import Modal from "./Modal";

export const Coin = ({
  id,
  currency,
  currencySymbol,
  name,
  image,
  symbol,
  price,
  volume,
  mktcap,
}) => {
  const [modalIsOpen, setIsOpen] = react.useState(false);

  const [history, setHistory] = react.useState([]);

  const HandleClick = (e) => {
    e.preventDefault();
    GetHistory(id, currency)
      .then((info) => {
        setHistory(info);
        setIsOpen(true);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="coin-container">
      <Modal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        history={history}
        coinName={name}
      />
      <div className="coin-row">
        <div className="coin" onClick={HandleClick}>
          <img src={image} alt="coin"></img>
          <h1>{name}</h1>
          <p className="coint-symbol">{symbol.toUpperCase()}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">
            {currencySymbol}
            {price}
          </p>
          <p className="coin-volume">
            {currencySymbol}
            {volume.toLocaleString()}
          </p>
          <p className="coin-mktcap">
            {currencySymbol}
            {mktcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export const LegendBar = () => {
  return (
    <div className="coin-container">
      <div className="coin-row" style={{ height: "2rem" }}>
        <div className="coin"></div>
        <div className="coin-data">
          <p className="coin-price">Price</p>
          <p className="coin-volume">Volume</p>
          <p className="coin-mktcap">Market Cap</p>
        </div>
      </div>
    </div>
  );
};

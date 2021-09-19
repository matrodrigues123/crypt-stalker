import react, { useEffect } from "react";
import reactDom from "react-dom";
import "./Coin.scss";
import GetHistory from "./GetHistory";
import Modal from "./Modal";

const Coin = ({ id, name, image, symbol, price, volume, mktcap }) => {
  
  const [modalIsOpen, setIsOpen] = react.useState(false);

  const [history, setHistory]= react.useState([]);

    
  
  const HandleClick = (e) => {
    e.preventDefault();
    GetHistory(id, "usd")
      .then((info)=>{
          setHistory(info)
          setIsOpen(true)
      })
      .catch((err)=> console.error(err))

    
  };
  return (
    <div className="coin-container">
    
    <Modal modalIsOpen= {modalIsOpen} setIsOpen={setIsOpen} history= {history} coinName={name}/>
    <div className="coin-row">
    <div className="coin" onClick={HandleClick}>
    <img src={image} alt="coin" ></img>
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
  
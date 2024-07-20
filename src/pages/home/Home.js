import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./home.css";
import { CoinContext } from "../../context/CoinContext";

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="home">
      <div className="hero">
        <form>
          <input type="text" placeholder="seach crypto.." />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p>24H Change</p>
          {/* <p>7D Change</p> */}
          <p>Market Cap</p>
        </div>
        {displayCoin?.slice(0, 10)?.map((item, index) => (
          <div className="table-layout" key={index}>
            <p>{item?.market_cap_rank}</p>
            <div>
              <img src={item?.image}></img>
              <p>{item?.name + "-" + item?.symbol}</p>
            </div>
            <p>
              {currency?.symbol} {item.current_price.toLocaleString()}
            </p>
            <p
              className={
                item?.price_change_percentage_24h > 0 ? "green" : "red"
              }
            >
              {Math.floor(item?.price_change_percentage_24h * 100) / 100}
            </p>
            <p>
              {" "}
              {currency?.symbol} {item?.market_cap.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

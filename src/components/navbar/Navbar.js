import React, { useContext } from "react";
import "./navbar.css";

import { SiBitcoinsv } from "react-icons/si";
import { CoinContext } from "../../context/CoinContext";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "Us" });
        break;
      }
      case "usd": {
        setCurrency({ name: "eur", symbol: "Eu" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "Rs" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };
  return (
    <div className="navbar">
      <SiBitcoinsv className="logo" />
      <ul>
        <li>Home</li>
        <li>Converter</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="inr">INR</option>
          <option value="eur">EUR</option>
        </select>
        <button> Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;

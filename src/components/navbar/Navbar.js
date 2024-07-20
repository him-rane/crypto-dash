import React, { useContext, useState } from "react";
import "./navbar.css";

import { SiBitcoinsv } from "react-icons/si";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const handleMenuClick = (props) => {
    return () => {
      setMenu(props);
    };
  };
  const { setCurrency } = useContext(CoinContext);
  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
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
      <div className="logo">
        <SiBitcoinsv />
        <p>
          <span>crypto</span>Dash
        </p>
      </div>

      <ul>
        <li>
          <Link
            onClick={handleMenuClick("home")}
            className={menu === "home" ? "active" : ""}
            to={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={handleMenuClick("converter")}
            className={menu === "converter" ? "active" : ""}
            to={"/converter"}
          >
            Converter
          </Link>
        </li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="inr">INR</option>
          <option value="eur">EUR</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;

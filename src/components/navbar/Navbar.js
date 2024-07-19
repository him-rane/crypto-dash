import React from "react";
import "./navbar.css";

import { SiBitcoinsv } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="navbar">
      <SiBitcoinsv className="logo" />
      <ul>
        <li>Home</li>
        <li>Converter</li>
      </ul>
      <div className="nav-right">
        <select>
          <option value="usd">USD</option>
          <option value="usd">INR</option>
          <option value="usd">EUR</option>
        </select>
        <button> Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;

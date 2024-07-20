import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CoinContextProvider } from "./context/CoinContext.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CoinContextProvider>
    <App />
  </CoinContextProvider>
);

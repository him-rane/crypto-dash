import React, { useState, useEffect, useContext } from "react";
import { CoinContext } from "../../context/CoinContext";
import "./converter.css"; // Import the CSS file

function CurrencyConverter() {
  const { allCoin } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("bitcoin");
  const [toCurrency, setToCurrency] = useState("usd");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(0);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  useEffect(() => {
    handleConvert();
  }, [fromCurrency, toCurrency, amount, displayCoin]);

  const handleConvert = () => {
    if (fromCurrency === "usd") {
      const toCoin = displayCoin.find((coin) => coin.id === toCurrency);
      if (toCoin) {
        const convertedAmount = amount / toCoin.current_price;
        setResult(convertedAmount);
      }
    } else if (toCurrency === "usd") {
      const fromCoin = displayCoin.find((coin) => coin.id === fromCurrency);
      if (fromCoin) {
        const convertedAmount = amount * fromCoin.current_price;
        setResult(convertedAmount);
      }
    } else {
      const fromCoin = displayCoin.find((coin) => coin.id === fromCurrency);
      const toCoin = displayCoin.find((coin) => coin.id === toCurrency);
      if (fromCoin && toCoin) {
        const convertedAmount =
          (amount * fromCoin.current_price) / toCoin.current_price;
        setResult(convertedAmount);
      }
    }
  };

  return (
    <div className="container">
      <h1 className="title">Cryptocurrency Converter</h1>
      <div>
        <label className="label">From:</label>
        <select
          className="select"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="usd">USD</option>
          {displayCoin.map((coin) => (
            <option key={coin.id} value={coin.id}>
              {coin.name}
            </option>
          ))}
        </select>
        <input
          className="input"
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      <div>
        <label className="label">To:</label>
        <select
          className="select"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="usd">USD</option>
          {displayCoin.map((coin) => (
            <option key={coin.id} value={coin.id}>
              {coin.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h2 className="result">
          Result: {result}{" "}
          {toCurrency === "usd"
            ? "USD"
            : displayCoin
                .find((coin) => coin.id === toCurrency)
                ?.symbol.toUpperCase()}
        </h2>
      </div>
    </div>
  );
}

export default CurrencyConverter;

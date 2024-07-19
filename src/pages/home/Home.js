import React, { useEffect } from "react";
import axios from "axios";
import "./home.css";

const Home = () => {
  useEffect(() => {
    fetchCryptocurrencyData();
  }, []);

  const fetchCryptocurrencyData = async () => {
    try {
      const response = await axios.get(
        "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
        {
          headers: {
            "X-CMC_PRO_API_KEY": "b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c",
          },
        }
      );

      // Process the response data
      console.log(response.data);
    } catch (error) {
      // Handle errors here
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error request data:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error message:", error.message);
      }
      console.error("Error config:", error.config);
    }
  };

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
          <p>7D Change</p>
          <p>Market Cap</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

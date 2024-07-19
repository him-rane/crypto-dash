import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <form>
          <input type="text" placeholder="seach crypto.." />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Home;

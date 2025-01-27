import React from "react";
import "../style/Home.css";
import Logo from "../images/ramen.png";

const logoSize = {
  width: "calc(30% + 2vw)"
};

const Home = () => {
  return (
    <div className="content-wrapper">
      <div className="wrapper">
        <h1 className="brand-name">Ramen Joy</h1>
        <div className="logo">
          <img src={Logo} style={logoSize}/>
        </div>
        <p className="slogan">for the love of ramen !</p>
      </div>
    </div>
  );
};

export default Home;
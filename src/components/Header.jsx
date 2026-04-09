import React from "react";
import "./Heading.css";
import logo from "../assets/spendifyyy.png";
const Header = () => {
  return (
    <div>
      <header>
        <div className="main">
          <img id="logo" src={logo} alt="" />

          <h1 id="heading"> Spendify</h1>
        </div>
        <h2 id="subheading">Know where your money goes.</h2>
      </header>
    </div>
  );
};

export default Header;

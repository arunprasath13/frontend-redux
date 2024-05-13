import React from "react";
import "./Header.css";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Count from "./Count";
const Header = () => {
  return (
    <header>
      <h1 className="logo">Hotdeal</h1>
      <div className="cart">
        <Link to="/cartPage"><IoCartOutline className="cart-img"/></Link>
        <Count />
      </div>
    </header>
  );
};

export default Header;

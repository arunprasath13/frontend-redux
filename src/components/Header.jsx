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
        <div className="img">
          <Link to="/cartPage">
            <IoCartOutline className="cart-img" size="50px" />
          </Link>
        </div>
        <div className="count">
         <Count />
        </div>
      </div>
    </header>
  );
};

export default Header;

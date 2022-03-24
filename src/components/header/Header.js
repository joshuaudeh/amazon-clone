import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <header>
      <div className="top__nav">
        <div className="logo">
          <img src="https://links.papareact.com/f90" alt="" />
        </div>

        <div className="InputContainer">
          <input type="text" />
          <SearchIcon className="search-icon" />
        </div>

        <div className="nav-top-list">
          <div className="list">
            <small>Hello, Sign in </small>
            <b>Account & Lists</b>
          </div>
          <div className="list">
            <small>Returns</small>
            <strong>& Orders</strong>
          </div>
          <div>
            <ShoppingCartIcon className="nav-cart list" />
          </div>
        </div>
      </div>
      {/* bottom nav */}
      <div className="nav_bottom">
        <span style={{ display: "flex", alignItems: "center" }}>
          <MenuIcon />
          All
        </span>
        <p>Today's Deals</p>
        <p>Customer Service</p>
        <p>Registry</p>
        <p className="options">Gift Cards</p>
        <p className="options">Sell</p>
      </div>
    </header>
  );
}

export default Header;

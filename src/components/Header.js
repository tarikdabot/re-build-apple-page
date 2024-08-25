import React from "react";
 
import '../components/header/header.css';
import cart from "../components/images/icons/cart.png";
import logo from "../components/images/icons/logo.png";
import search from "../components/images/icons/search-icon.png";
import Nav from "./Nav";
const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="internal-header-wrapper">
        <div className="header-links-wrapper">
          <Nav className="logo-link" link="/" imglink={logo} />
          <Nav link="#" name="Mac" />
          <Nav link="#" name="Iphone" />
          <Nav link="#" name="ipad" />
          <Nav link="#" name="watch" />
          <Nav link="#" name="tv" />
          <Nav link="#" name="Music" />
          <Nav className="logo-link" imglink={search} />
          <Nav className="logo-link" link="/" imglink={cart} />
        </div>
      </div>
    </header>
  );
};
export default Header;

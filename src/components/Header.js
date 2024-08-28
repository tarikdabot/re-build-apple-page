import React from "react";
import '../components/header/header.css';
import cart from "../components/images/icons/cart.png";
import logo from "../components/images/icons/logo.png";
import search from "../components/images/icons/search-icon.png";
import Navs from "./Navs";
const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="internal-header-wrapper">
        <div className="header-links-wrapper">
          <Navs className="logo-link" link="/" imglink={logo} />
          <Navs link="/Mac" name="Mac" />
          <Navs link="/Iphone "name="Iphone" />
          <Navs link="/ipad" name="ipad" />
          <Navs link="/watch" name="watch" />
          <Navs link="/tv" name="tv" />
          <Navs link="Music" name="Music" />
          <Navs className="logo-link" imglink={search} />
          <Navs className="logo-link" link="/" imglink={cart} />
        </div>
      </div>
    </header>
  );
};
export default Header;

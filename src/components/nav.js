import React, { useState } from "react";
import '../components/header/bootstrap.css';
const Nav = ({ link, name, imglink, className,searchIcon}) => {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    if (imglink === searchIcon) {
      setShowSearch(!showSearch);
    }
  };

  return (
    <>
      <a href={link} className={className} onClick={handleSearchClick}>
        {imglink ? <img src={imglink} alt={name} /> : name}
      </a>
      {showSearch && imglink === searchIcon && (
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          // Add your search logic here
        />
      )}
    </>
  );
};

export default Nav;

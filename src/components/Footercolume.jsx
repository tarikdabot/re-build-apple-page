import React from 'react';
 

const Footercolume = (props) => {
  return (
    <div className="links-wrapper-1">
      <h3>{props.title}</h3>
      <ul>
        <li>
          <a href={props.url}>{props.link}</a>
        </li>
        <li>
          <a href="#">iPad</a>
        </li>
        <li>
          <a href="#">iPhone</a>
        </li>
        <li>
          <a href="#">Watch</a>
        </li>
        <li>
          <a href="#">TV</a>
        </li>
        <li>
          <a href="#">Music</a>
        </li>
        <li>
          <a href="#">AirPods</a>
        </li>
        <li>
          <a href="#">HomePod</a>
        </li>
        <li>
          <a href="#">iPod touch</a>
        </li>
        <li>
          <a href="#">Accessories</a>
        </li>
        <li>
          <a href="#">Gift Cards</a>
        </li>
      </ul>
    </div>
  );
}

export default Footercolume
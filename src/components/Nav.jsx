import React from 'react';
import '../components/header/bootstrap.css';

const Nav = (props) => {
  return (
    <ul>
      <li className={props.className}>
        <a href={props.link}>
          <img src={props.imglink} alt=''/>
          {props.name}
        </a>
      </li>       
    </ul>
  );				
}

export default Nav
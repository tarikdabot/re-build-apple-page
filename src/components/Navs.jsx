import React from 'react';
import '../components/header/bootstrap.css';

const Navs = (props) => {
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

export default Navs
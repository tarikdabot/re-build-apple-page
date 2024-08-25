import React from 'react';
import '../components/first/first.css';
// import macbbok from "../components/images/home/macbook-pro.jpg";
const FirstSection = (props) => {
  return (
    <section className="main-highlight-wrapper">

  <div className="internal-wrapper">
  <div class="container-fluid">
        <div className="model">{props.model}</div>

        <div className="product-title">{props.name}</div>

        <div className="brief-description">{props.description}</div>
        <div className="price-wrapper">
         {props.price}
        </div>
        <div className="links-wrapper">
          <ul>
            <li>
              <a href="">{props.learn}</a>
            </li>
            <li>
              <a href="">{props.buy}</a>
            </li>
          </ul>
        </div>

        <div className="main-image-wrapper">
          <img src={props.imglink} />
        </div>
      </div>
      
      </div>
 
      
    </section>
  ); 
}
export default FirstSection
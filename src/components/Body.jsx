import React from 'react';
 

const Body = (props) => {
  return (
    <div className="second-hightlight-wrapper">
      <div className="internal-wrapper">
        <div className="model">{props.model} 16-inch model</div>
        <div className="title-wraper">
          <h1> {props.name}  </h1>
        </div>

        <div className="description-wrapper">
          <h3>{props.description}Pro cameras. Pro display. Pro performance.</h3>
        </div>

        <div className="price-wrapper">
          {props.price}
          From $24.95/mo. or $599 with trade-in.
        </div>

        <div className="links-wrapper">
          <ul>
            <li>
              <a href={props.links}>{props.learn} </a>
            </li>
            <li>
              <a href={props.links}>{props.buy} </a>
            </li>
          </ul>
        </div>
        <div className="main-image-wrapper">
          <img src={props.imglink} />
        </div>
        <div className="watch-more-wrapper">
          <a href={props.wachlink}>{props.wach} </a>
        </div>
      </div>
    </div>
  );
}
export default Body;
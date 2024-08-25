import React from 'react';
import '../components/second-section/second.css'

const SecondeSection = () => {
  return (
    <section className="second-hightlight-wrapper">
      <div className="internal-wrapper">
        <div className="title-wraper">
          <h1> iPhone 11 Pro </h1>
        </div>

        <div className="description-wrapper">
          <h3>Pro cameras. Pro display. Pro performance.</h3>
        </div>

        <div className="price-wrapper">From $24.95/mo. or $599 with trade‑in.</div>

        <div className="links-wrapper">
          <ul>
            <li>
              <a href="">Learn more</a>
            </li>
            <li>
              <a href="">Buy</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SecondeSection
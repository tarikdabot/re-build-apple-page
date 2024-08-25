import React from 'react';
// import Body from './Body'
import macbbok from "../components/images/home/macbook-pro.jpg";
import FirstSection from './firt-section';

const Boprops = () => {
  return (
    <>
      <FirstSection
        model="16-inch model"
        name="MacBook Pro"
        description="The best for the brightest."
        price=""
        link="#"
        learn="Learn more"
        buy="Buy"
        imglink={macbbok}
        wach=""
      />
      <FirstSection
        model=" 
"
        name="iPhone 11 Pro "
        description="Pro cameras. Pro display. Pro performance. "
        price="From $24.95/mo. or $599 with trade‑in."
        link="#"
        learn="Learn more"
        buy="Buy"
        imglink={macbbok}
        wach=""
      />
      {/* <Body
        name=""
        description=""
        price=""
        link=""
        learn=""
        buy=""
        imglink=""
        wach=""
      /> */}
    </>
  );
    
}

export default Boprops
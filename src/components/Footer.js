import React from 'react';
import '../components/footer/footer.css'
import flag from '../components/images/icons/16.png';
import Footertlink from './Footert-link';
const Footer = () => {
  return <footer className="footer-wrapper">
			<div className="internal-wrapper"> 
				<div className="upper-text-container">
					1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X in good condition. Additional trade‑in values require purchase of a new iPhone, subject to availability and limits. Must be at least 18. Apple or its trade-in partners reserve the right to refuse or limit any Trade In transaction for any reason. In‑store trade‑in requires presentation of a valid, government-issued photo ID (local law may require saving this information). Sales tax may be assessed on full value of new iPhone. Additional terms from Apple or Apple’s trade-in partners may apply. Monthly pricing: Available to qualified customers and requires 0% APR, 24‑month installment loan with Citizens One, and iPhone activation with AT&T, Sprint, T‑Mobile, or Verizon. <a href="#"> Full terms apply</a>.
				</div>
			<Footertlink />
				<div className="my-apple-wrapper"> 
					More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
					<h3>Re-build by Tarik Dabot</h3>
				</div>
				<div className="copyright-wrapper">
					<div className="copyright">
						Copyright © 2024 Apple Inc. All rights reserved.
						
					</div>
					<div className="footer-links-terms">
						<ul>
							<li><a href="#">Privacy Policy</a></li>
							<li><a href="#">Terms of Use</a></li>
							<li><a href="#">Sales and Refunds</a></li>
							<li><a href="#">Legal</a></li>
							<li><a href="#">Site Map</a></li>
						</ul>
					</div>
					<div className="footer-country">
						<div className="flag-wrapper"><img src={flag}/></div> <div className="footer-country-name">United States</div> 
					</div>
				</div>
			</div>
		</footer> 
    
}

export default Footer
import React from 'react';
 import '../components/forth-section/forth.css'
 
import applcard from "../components/images/icons/apple-card-logo.png";
import appltv from '../components/images/icons/apple-tv-logo.png';
import ipad from "../components/images/icons/new-ipad-logo.png";
import servant from '../components/images/icons/servant-logo.png';
import watch from '../components/images/icons/watch-series5-logo.png';
const FoFiSiSection = () => {
  return<>
  <section className="fourth-heghlight-wrapper">
			<div className="left-side-wrapper">
				<div className="top-logo-wrapper">
					<div className="logo-wrapper">
						<img src={watch}/>
					</div>
				</div>
				<div className="description-wraper">
					With the new Always-On Retina display.<br/>
					You have never seen a watch like this.
				</div>
				<div className="links-wrapper">
					<ul>
						<li><a href="">Learn more</a></li>
						<li><a href="">Buy</a></li>
					</ul> 
				</div>
			</div>
			<div className="right-side-wrapper">
				<div className="top-logo-wrapper">
					<div className="logo-wrapper">
						<img src={applcard}/>
					</div>
				</div>
				<div className="description-wraper">
					Get 3% Daily Cash on purchases from Apple using Apple Card.
				</div>
				<div className="links-wrapper">
					<ul>
						<li><a href="">Learn more</a></li>
						<li><a href="">Buy</a></li>
					</ul> 
				</div>
			</div>	
		</section>
		<section className="fifth-heghlight-wrapper"> 
			<div className="left-side-wrapper">
				<div className="top-logo-wrapper">
					<div className="logo-wrapper">
						<img src={appltv}/>
					</div>
				</div>

				<div className="tvshow-logo-wraper">
					<img src={servant}/>
				</div>

				<div className="watch-more-wrapper">
					<a href="#">Watch the trailer</a>
				</div>
			</div>
			<div className="right-side-wrapper">
				<div className="top-logo-wrapper">
					<div className="logo-wrapper">
						AirPods Pro
					</div>
				</div>

				<div className="description-wraper">
					Magic like you have never heard.
				</div>

				<div className="links-wrapper">
					<ul>
						<li><a href="">Learn more</a></li>
						<li><a href="">Buy</a></li>
					</ul> 
				</div>
			</div>	
		</section>
		<section className="sixth-heghlight-wrapper"> 
			<div className="left-side-wrapper">
				<div className="model">
					16-inch model
				</div>

				<div className="product-title-small">
					MacBook Pro
				</div>

				<div className="description-wraper">
					The best for the brightest.
				</div>

				<div className="links-wrapper">
					<ul>
						<li><a href="">Learn more</a></li>
						<li><a href="">Buy</a></li>
					</ul> 
				</div>
			</div>
			<div className="right-side-wrapper">
				<div className="top-logo-wrapper">
					<div className="logo-wrapper">
						<img src={ipad}/>
					</div>
				</div>

				<div className="description-wraper">
					Like a computer. Unlike any computer.
				</div>

				<div className="links-wrapper">
					<ul>
						<li><a href="">Learn more</a></li>
						<li><a href="">Buy</a></li>
					</ul> 
				</div>
			</div>	
		</section>
  </>
}
export default FoFiSiSection
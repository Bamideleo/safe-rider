import React from 'react'
import Button from '../Button';
import Carditem from '../Carditem';
import Footer from '../Footer';
import './Rider.css';
import Zoom from 'react-reveal/Zoom';

export default function Rider() {
    return (
       <div className="rider">
           <div className="container grid">
               <div className="sub-rider-1">
                   <i className="fas fa-motorcycle fa-3x"></i>
                   <h2>Ride with <span>Safe</span></h2>
                   <p>Safe is easy, comfortable, and affordable.
                     We don’t just drive you; we connect you with 
                     people and places that matter to you. Do you need
                      an affordable and a easy ride? Get a Safe ride!</p>
                      <Button buttonStyle="btn--primary" buttonSize="btn--large">Sign Up to Safe</Button>  
               </div>
               <div className="sub-rider-2">
               <svg width="600" height="620" viewBox="0 0 500 600">
                            <circle cx="250" cy="320" r="260" fill="none" stroke="rgb(14, 118, 14)" strokeWidth="2"
                            strokeOpacity="0.3" />
                            <circle cx="250" cy="320" r="230" fill="none" stroke="rgb(14, 118, 14)" strokeWidth="2"
                            strokeOpacity="0.3" />
                            <circle cx="250" cy="320" r="200" fill="none" stroke="rgb(14, 118, 14)" strokeWidth="2" 
                            strokeOpacity="0.3" />
                            <circle cx="150" cy="80" r="8" fill="rgb(14, 118, 14,0.5)">
                            <animateTransform attributeName="transform" type="rotate" from="0 250 320" to="360 250 320" 
                            repeatCount="indefinite" dur="4.5s"></animateTransform>
                            </circle>
                            <circle cx="150" cy="80" r="8" fill="rgb(14, 118, 14,0.5)">
                            <animateTransform attributeName="transform" type="rotate" from="0 250 320" to="360 250 320" 
                            repeatCount="indefinite" dur="4.8s"></animateTransform>
                            </circle>
                            <circle cx="150" cy="113" r="8" fill="rgb(14, 118, 14,0.5)">
                            <animateTransform attributeName="transform" type="rotate" from="0 250 320" to="360 250 320" 
                            repeatCount="indefinite" dur="5s"></animateTransform>
                            </circle>
                            <circle cx="150" cy="148" r="8" fill="rgb(14, 118, 14,0.5)">
                            <animateTransform attributeName="transform" type="rotate" from="0 250 320" to="360 250 320" 
                            repeatCount="indefinite" dur="4.4s"></animateTransform>
                            </circle>
                        </svg>
                        <div className="rider-img">
                        <img src="./images/driv-1.png" alt="MEME"/>
                        </div>
                        <div className="rider-img2">
                        <img src="./images/loc.png" alt="MEME"/>
                        </div>
               </div>
           </div>
           {/* section two */}
           <div className="container">
               <div className="rider-text">
                   <h2>We Don't Just <span>Driver You</span></h2>
                   <p>You can now enjoy your ride from place to place with high 
                    safety standards and comfort. Our riders have full control 
                    of their mobility developed in our apps.</p>
               </div>
           </div>
           {/* section three */}
           <div className="rider-card">
               <div className="container grid">
                   <Zoom left delay={500} duration={2000}>
                   <div className="card ride-card">
                       <Carditem
                       src="./images/ride.jpg"
                       text="Get rides
                       on request."
                       />
                   </div>
                   </Zoom>
                   <Zoom top delay={2000} duration={2000}>
                   <div className="card ride-card">
                       <Carditem
                       src="./images/rider.png"
                       text="Get affordable
                       options."
                       />
                   </div>
                   </Zoom>
                   <Zoom right delay={1500} duration={2000}>
                   <div className="card ride-card">
                       <Carditem
                       src="./images/man12.jpg"
                       text="Connect with
                       people and places."
                       />
                   </div>
                   </Zoom>
               </div>
           </div>
                {/* section eight */}
                <div className="backgb-eight">
                    <div className=" container last-man">
                        <h2>The Safe Report</h2>
                        <p>Safe is connecting people and places one at a time. 
                            We are transforming urban mobility in a comfortable and safe manner.
                             Get on Safe. Spend more time enjoying the moment as we <b>connect you to people and places.</b></p>
                             <div className="trav">
                        <Button buttonStyle="btn--primary" buttonSize="btn--large">Discover Safe</Button> 
                        <a href=""><i className="fas fa-play-circle"></i>Watch Video</a>
                        </div>
                    </div>
                </div>
                <Footer/>
       </div>
    )
}

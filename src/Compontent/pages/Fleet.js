import React from 'react'
import Button from '../Button';
import Footer from '../Footer';
import './Fleet.css';

export default function Fleet() {
    return (
       <div className="fleet">
           <div className="fleet-bg">
               <div className="container grid">
                   <div className="fleet-item">
                   <i class="fas fa-bus fa-3x"></i>
                   <h2><span>Safe</span> Fleet</h2>
                   <p>Thinking of partnering with a community that values people?
                        Register and manage your fleet on Safe.</p>
                    <Button buttonStyle="btn--primary" buttonSize="btn--large">Sign Up Today</Button>  
                   </div>
                   <div className="fleet-item-2">
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
                        <div className="fleet-img">
                            <img src="./images/driv-1.png" alt="MEME"/>
                        </div>
                        <div className="fleet-img-2">
                            <img src="./images/fleet.png" alt="MEME"/>
                        </div>
                   </div>
               </div>
           </div>
           {/* section two */}
           <div className="fleet-fr">
               <div className="container grid">
                   <div className="frames-fleet">
                        <div className="imag-1">
                        <img src="/images/bgd2.png" alt="MEME"/>
                        </div>
                        <div className="imag">
                        <img src="./images/lap.png" alt="MEME"/>
                        </div>
                   </div>
                   <div className="frames-fleet">
                       <i className="fas fa-desktop fa-3x"></i>
                       <h2>Manage Your Fleet <span>Easily</span></h2>
                       <p>Get a global view of your entire fleet. See driver movement and transactions real-time.</p>
                       <div className="trav">
                        <Button buttonStyle="btn--outline" buttonSize="btn--large">Sign Up Today</Button> 
                        <a href=""><i className="fas fa-play-circle"></i>Watch Video</a>
                        </div>
                   </div>
               </div>
           </div>
           {/* section three */}
           <div className="fleet-panel">
               <div className="container grid">
                <div className="fleet-pan">
                    <i className="fas fa-wallet fa-3x"></i>
                    <h2>Make Money on <span>Your Terms</span></h2>
                    <p>Fleet managers can now make more money on Safe than on any other platform.
                         No commissions. You keep all you make.</p>
                    <div className="trav">
                <a href=""><i className="fas fa-play-circle"></i> Watch Video</a>
                <Button buttonStyle="btn--outline" buttonSize="btn--large">Sign Up to Rider</Button>
                    </div> 
                </div>
                <div className="fleet-pan">
                <div className="pan">
                <img src="/images/bgd2.png" alt="MEME"/>
                </div>
                <div className="pan-1">
                <img src="/images/tab.jpg" alt="MEME"/>
                </div>
                </div>
               </div>
           </div>
           <Footer/>
       </div>
    )
}

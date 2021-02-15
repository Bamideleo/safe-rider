import React from 'react';
import Button from '../Button';
import Carditem from '../Carditem';
import Footer from '../Footer';
import './Delivery.css'
import Zoom from 'react-reveal/Zoom';

export default function Delivery() {
    return (
       <div className="delivery">
           <div className="container grid">
               <div className="sub-delivery-1">
                   <i className="fas fa-truck fa-3x"></i>
                   <h2><span>Safe</span> Delivery</h2>
                   <p>Move goods and cargo from place to place. 
                    Safe enables individuals and businesses to facilitate
                 goods and cargo movement securely and fast with affordable options.</p>
                 <Button buttonStyle="btn--primary" buttonSize="btn--large">
                     <i className="fab fa-apple "></i>&nbsp;Get IOS</Button>
                 <Button buttonStyle="btn--outline" buttonSize="btn--large">
                     <i className="fab fa-google-play"></i>&nbsp;Get Android</Button>   
               </div>
               <div className="sub-delivery-2">
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
                        <div className="delivery-img">
                            <img src="./images/driv-1.png" alt="MEME"/>
                        </div>
                        <div className="delivery-img-2">
                            <img src="./images/del.png" alt="MEME"/>
                        </div>
               </div>
           </div>
           {/* section two */}
           <div className="delivery-text">
               <div className="container">
                <h2>Move Your Cargo <span>Safely</span></h2>
                <p>You no longer need to spend endless hours
                 looking for the best and secure way to move your goods
                  and cargo. With Safe you can spend more time on family 
                  and business while we move for you.</p>
               </div>
           </div>
           {/* section three */}
           <div className="delivery-card">
               <div className="container grid">
                   <Zoom left delay={500} duration={2000}>
                   <div className="card deliv">
                       <Carditem
                       src="./images/van.jpg"
                       text="Carrier"
                       para="Our bike, van and truck options gives you the 
                       freedom and flexibility to move any size of goods and cargo."
                       />
                   </div>
                   </Zoom>
                   <Zoom left delay={1500} duration={2000}>
                   <div className="card deliv">
                       <Carditem
                       src="./images/box1.jpg"
                       text="Insurance"
                       para="Your goods and cargo are insured in transit on Safe Freight."
                       />
                   </div>
                   </Zoom>
                   <Zoom right delay={2500} duration={2000}>
                   <div className="card deliv">
                       <Carditem
                       src="./images/tur.jpeg"
                       text="Shipper"
                       para="You can now move your cargo from port to destination 
                       from wherever you are in the world. Safe gives shippers more
                        options and power to get cargo from port to warehouse to 
                        clients."
                       />
                   </div>
                   </Zoom>
                   <Zoom right delay={3500} duration={2000}>
                   <div className="card deliv">
                       <Carditem
                       src="./images/ins.jpg"
                       text="Transparency"
                       para="With Safe Freight you see end-to-end transaction from our platform
                        how your goods and cargo are moved."
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

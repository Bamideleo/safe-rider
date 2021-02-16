import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom';
import Button from '../Button';
import Carditem from '../Carditem';
import Footer from '../Footer';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';

export default function Home() {
    return (
        <>
        <div className="header-bg">
            <div className="header-img">
            <div className="container">
                {/* first section */}
                <div className="header-items grid">
                    <div className="header-item-1">
                        <Bounce  delay={500} duration={2000} cascade>
                        <h2>safe</h2>
                        </Bounce>
                        <Bounce left delay={500} duration={2000}>
                        <p>connecting people</p>
                        </Bounce>
                        <Bounce right delay={2000} duration={2000}>
                        <p>connecting places</p>
                        </Bounce>
                        <Bounce top delay={4000} duration={2000}>
                        <Button buttonStyle="btn--primary" buttonSize="btn--large">Discover Safe</Button>
                        </Bounce>
                    </div>
                    <div className="header-item-2">
                        <svg width="620" height="620" viewBox="0 0 500 600">
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
                            repeatCount="indefinite" dur="4.6s"></animateTransform>
                            </circle>
                        </svg>
                        <div className="header-img">
                        <img src="/images/phone1.png" alt="MeME"/>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                {/* second section */}
                <div className="container">
                <div className="header-items-2 grid">
                    <div className="header-item-022">
                        <div className="ima-1">
                        <img src="/images/bgd2.png" alt="MEME"/>
                        </div>
                       <div className="ima-2">
                       <img src="/images/kala.png" alt="MEME"/>
                       </div>
                    </div>
                    <div className="header-item-022">
                        <i className="fas fa-users fa-3x"></i>
                        <h2>Drive with <span>Safe</span></h2>
                        <p>Join our community of drivers meeting diverse mobility demands of our riders. 
                            Take control of your time when you Drive with Safe.</p>
                            <div className="trav">
                        <Button buttonStyle="btn--outline" buttonSize="btn--large">Discover Safe</Button> 
                        <a href=""><i className="fas fa-play-circle"></i>Watch Video</a>
                        </div>
                    </div>
                </div>
               
                {/* third section */}
                <div className="third-items grid">
                    <div className="third-item">
                    <i className="fas fa-car fa-3x"></i>
                        <h2>Ride with <span>Safe</span></h2>
                        <p>Do you need an affordable and a easy ride? Get a Safe ride. 
                        We don’t just drive you; we connect you with people and places that matter to you.</p>
                        <div className="trav">
                        <a href=""><i className="fas fa-play-circle"></i> Watch Video</a>
                        <Button buttonStyle="btn--outline" buttonSize="btn--large">Sign Up to Rider</Button>
                            </div> 
                    </div>
                    <div className="third-item">
                    <div className="ima">
                        <img src="/images/bgd1.png" alt="MEME"/>
                        </div>
                       <div className="ima-3">
                       <img src="/images/kiss.png" alt="MEME"/>
                       </div>
                    </div>
                </div>
                {/* section four */}
                <div className="items-four grid">
                    <div className="item-four">
                    <div className="sub-item">
                        <img src="/images/bgd1.png" alt="MEME"/>
                        </div>
                        <div className="sub-item2">
                        <img src="./images/mark2.png" alt="MEME"/>
                        </div>
                    </div>
                    <div className="item-four">
                    <i className="fas fa-truck fa-3x"></i>
                        <h2>Freight with <span>Safe</span></h2>
                        <p>The power to control how your goods are moved and delivered now rests in your hands. 
                            We offer transparent connection of cargo from customer to destination.</p>
                            <div className="trav">
                        <a href=""><i className="fas fa-play-circle"></i> Watch Video</a>
                        <Button buttonStyle="btn--outline" buttonSize="btn--large">Get Safe Freight</Button>
                            </div> 
                    </div>
                </div>
            </div>
            
            
             {/* section five */}
            <div className="backg-five">
                <div className="container">
                <div className="items-five grid">
                    <div className="item-five">
                        <i className="fas fa-globe-africa fa-3x"></i>
                        <h2><span>Safe</span> Your Way</h2>
                        <p>Do you need an affordable and a easy ride? Get a Safe ride.
                        We don’t just drive you; we connect you with people and places that matter to you.</p>
                        <Button buttonStyle="btn--primary" buttonSize="btn--large"><i className="fab fa-apple"></i> Get iOS</Button>
                        <Button buttonStyle="btn--outline" buttonSize="btn--large"><i className="fab fa-google-play"></i> Get Android</Button>
                    </div>
                    <div className="item-five">
                        <div className="sub-five">
                        <img src="./images/driv-1.png" alt="MEME"/>
                        </div>
                        <div className="sub-five2">
                        <img src="/images/loc.png" alt="MEME"/>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                {/* section six */}
                <div className="container">
                    <div className="text">
                        <h2><span>Safe</span> Features</h2>
                        <p>We offer a wide range of options from ride to freight, 
                            from driver to rider. Safe is not just a hailing app.
                         Safr helps connect you to people and places that matter to you. 
                         Safe is convenience and possibility.</p>
                    </div>
                </div>


                {/* section seven */}
                <div className="card-items">
                    <div className="container grid">
                        <Zoom left delay={500} duration={1000}>
                        <div className="card item-1">
                            <Carditem
                            src="/images/man11.jpg"
                            text="Rides on Request"
                            />
                        </div>
                        </Zoom>
                        <Zoom left delay={1500} duration={1000}>
                        <div className="card item-2">
                            <Carditem
                            src="/images/sa3.jpeg"
                            text="Insurance in Transit"
                            />
                        </div>
                        </Zoom>
                        <Zoom right delay={2500} duration={1000}>
                        <div className="card item-1">
                            <Carditem
                            src="/images/sa4.jpg"
                            text="Affordable Options"
                            />
                        </div>
                        </Zoom>
                        <Zoom right delay={3500} duration={1000}>
                        <div className="card item-2">
                            <Carditem
                            src="/images/sa5.jpg"
                            text="Available 24/7"
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
        </>
    )
}

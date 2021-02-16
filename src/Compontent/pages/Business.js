import React from 'react'
import Button from '../Button';
import Footer from '../Footer';
import './Business.css';
import Carditem from '../Carditem';
import Zoom from 'react-reveal/Zoom';

export default function Business() {
    return (
        <div className="business">
            <div className="business-bg">
            <div className="container grid">
            <div className="business-item">
                <i className="fas fa-globe fa-3x"></i>
                <h2><span>Safe</span> Business</h2>
                <p>Thinking of partnering with a community that values people?
                     Safe delivers the experience you crave.</p>
                     <Button buttonStyle="btn--primary" buttonSize="btn--large">Discover Safe</Button>  
            </div>
            <div className="business-item-2">
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
                <div className="business-img">
                <img src="./images/driv-1.png" alt="MEME"/>
                </div>
                <div className="business-img-2">
                <img src="./images/bsin.png" alt="MEME"/> 
                </div>
            </div>
            </div>  
            </div>
            {/* section two */}
            <div className="container">
                <div className="business-text">
                    <h2>Benefits of <span>Safe</span> Business</h2>
                    <p>Business can now manage their staff transportation and mobility
                     on one powerful platform. This enhances a simple view and transparency across board.</p>
                </div>
            </div>
            {/* section three */}
            <div className="business-card">
                <div className="container grid">
                    <Zoom left delay={500} duration={1000}>
                    <div className="business-cards card">
                        <Carditem 
                        src="/images/us.jpg"
                        text="Safe"
                        />
                    </div>
                    </Zoom>
                    <Zoom top delay={2000} duration={1000}>
                    <div className="business-cards card">
                        <Carditem 
                        src="/images/mr.jpg"
                        text="Comfortable"
                        />
                    </div>
                    </Zoom>
                    <Zoom right delay={1500} duration={1000}>
                    <div className="business-cards card">
                        <Carditem 
                        src="/images/sin.jpg"
                        text="Reliable"
                        />
                    </div>
                    </Zoom>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

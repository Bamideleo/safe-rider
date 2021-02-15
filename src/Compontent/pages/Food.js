import React from 'react'
import Button from '../Button';
import Footer from '../Footer';
import './Food.css'

export default function Food() {
    return (
        <div className="food">
            <div className="container grid">
                <div className="sub-food">
                <i className="fas fa-motorcycle fa-3x"></i>
                    <h2><span>Safe</span> Food</h2>
                    <p>Discover great food and get it delivered, Fast!
                    Launching Soon!</p>
                    <Button buttonStyle="btn--primary" buttonSize="btn--large">Keep Me Informed</Button>  
                </div>
            <div className="sub-food-1">
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
                            repeatCount="indefinite" dur="4.6s"></animateTransform>
                            </circle>
                            <circle cx="150" cy="148" r="8" fill="rgb(14, 118, 14,0.5)">
                            <animateTransform attributeName="transform" type="rotate" from="0 250 320" to="360 250 320" 
                            repeatCount="indefinite" dur="4.4s"></animateTransform>
                            </circle>
                        </svg>
                    <div className="food-img">
                        <img src="./images/driv-1.png" alt="MEME"/>
                    </div>
                    <div className="food-img-2">
                        <img src="./images/fed.png" alt="MEME"/>
                    </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

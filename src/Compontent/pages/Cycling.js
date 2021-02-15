import React from 'react'
import Button from '../Button';
import Footer from '../Footer';
import './Cycling.css'
export default function Cycling() {
    return (
       <div className="cycling">
           <div className="container grid">
               <div className="cycl-item">
               <i className="fas fa-motorcycle fa-3x"></i>
               <h2><span>Safe</span> Cycling</h2>
               <p>Take short trips faster within your community.Launching Soon!</p>
                <Button buttonStyle="btn--primary" buttonSize="btn--large">Keep Me Informed</Button>  
               </div>
               <div className="cycl-item-2">
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
                        <div className="cycl-img">
                        <img src="./images/driv-1.png" alt="MEME"/>
                        </div>
                        <div className="cycl-img2">
                        <img src="./images/cylc.png" alt="MEME"/>
                        </div>
               </div>
           </div>
           <Footer/>
       </div>
    )
}

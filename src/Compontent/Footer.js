import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    return (
       <footer className="footer">
           <div className="container grid">
               <div className="sub-footer">
                   <h2>Safe</h2>
                   <p>Safe helps connect you to people and places that matter to you. Safe is convenience and possibility.</p>
                   <ul>
                       <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                       <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                       <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                       <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                   </ul>
                   <h5>&copy; Safe Inc. | All Rights Reserved.</h5>
               </div>
                <div className="sub-footer-2">
                    <ul>
                        <h3><span>Safe</span>&nbsp;Services</h3>
                       <li><Link to="/" className="footer-link">Dirver</Link></li>
                       <li><Link to="/" className="footer-link">Rider</Link></li>
                       <li><Link to="/" className="footer-link">Delivery</Link></li>
                       <li><Link to="/" className="footer-link">Food</Link></li>
                       <li><Link to="/" className="footer-link">Cycling</Link></li>
                       <li><Link to="/" className="footer-link">Fleet</Link></li>
                       <li><Link to="/" className="footer-link">Business</Link></li>
                    </ul>

                    <ul>
                        <h3><span>Safe</span>&nbsp;Enterprise</h3>
                        <li><a href="#">The Company</a></li>
                        <li><a href="#">In the press</a></li>
                        <li><a href="#">Why Safe</a></li>
                        <li><a href="#">Event</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Cities</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>

                <ul>
                    <h3><span>Safe</span>&nbsp;Benefits</h3>
                    <li><a href="#">Safe Cares</a></li>
                    <li><a href="#">Insurance</a></li>
                    <li><a href="#">Safety</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Usage Terms</a></li>
                    <li><a href="#">Contact Us</a></li>
                    </ul>

                    <ul>
                    <h3><span>Safe</span>&nbsp;Benefits</h3>
                    <li><a href="#"><strong>@</strong>safe@ride.com</a></li>
                    <div className="btn-1"><button><i className="fab fa-apple fa-2x"></i>&nbsp;Get IOS</button></div>
                    <div className="btn-2"><button><i className="fab fa-google-play fa-2x"></i>&nbsp;Get Android</button></div>
                   
                    </ul>
                </div>
           </div>
       </footer>
    )
}

import React, {useState,useEffect} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar() {
    const [click, setClick] = useState(false);

   const handleShowNav= ()=>{
        setClick(!click);
    }
    const handleClose= ()=>{
        setClick(false);
    }
    return (
       <div className="navbar">
           <div className="navbar-container">
               <Link to="/" className="nav-logo" onClick={handleClose}>Safe</Link>
               <div className="nav-btn" onClick={handleShowNav}>
               <i className={click?"fas fa-times fa-2x":"fas fa-bars fa-2x"}/></div>
               <ul className= {click?"nav-items active":"nav-items"}>
                <li className="nav-item"><Link  to="/driver" className="links" onClick={handleClose}>Driver</Link></li>
                <li className="nav-item"><Link  to="/rider" className="links" onClick={handleClose}>Rider</Link></li>
                <li className="nav-item"><Link  to="/delivery" className="links" onClick={handleClose}>Delivery</Link></li>
                <li className="nav-item"><Link  to="/food" className="links" onClick={handleClose}>Food</Link></li>
                <li className="nav-item"><Link  to="/cycling" className="links" onClick={handleClose}>Cycling</Link></li>
                <li className="nav-item"><Link  to="/fleet" className="links" onClick={handleClose}>Fleet</Link></li>
                <li className="nav-item"><Link  to="/business" className="links"onClick={handleClose}>Business</Link></li>
               </ul>
            <button>Sign In</button>
           </div>
       </div>
    )
}

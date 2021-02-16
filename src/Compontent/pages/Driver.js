import React from 'react'
import Button from '../Button'
import Carditem from '../Carditem'
import './Driver.css'
import Footer from '../Footer';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';

export default function Driver() {
    return (
       <div className="driver">
           <div className="driver-bg">
           <div className="container grid">
               <div className="driver-item-1">
                   <i className="fas fa-car fa-3x"></i>
                   <h2>Drive with <span>Safe</span></h2>
                   <p>Join our community of drivers meeting diverse mobility
                     demands of our riders, and achieve your financial goals 
                     quicker when you drive with Safe.</p>
                     <div className="btn-driver">
                     <Button  buttonStyle="btn--primary" buttonSize="btn--large">Discover Safe</Button>
                     </div>
               </div>
               <div className="driver-item-2">
                   <div className="card-2">
                        <div className="driv-sign">
                        <a href="#"><p>Sign Up</p></a>
                        </div>
                       <div className="btn-log">
                       <button>Login</button>
                       </div>
                       <div className="card-details">
                       <h2>Sign Up and Start <span>Driving</span></h2>
                       </div>
                     <div className="form-group">
                         <form action="">
                             <div className="form-item">
                                 <input type="text" name="name" placeholder="Enter Your Full Name" required/>
                             </div>
                             <div className="form-item">
                                 <input type="email" name="email" placeholder="Enter Your Email" required/>
                             </div>
                             <div className="form-item">
                                 <input type="text" name="number" placeholder="+234|Enter Your Phone" required/>
                             </div>
                             <div className="form-item">
                                 <input type="text" name="city" placeholder="Enter Your City" required/>
                             </div>
                             <div className="form-items">
                             <Button buttonStyle="btn--outline" buttonSize="btn--large">Submit</Button>
                             </div>
                         </form>
                     </div>
                   </div>
               </div>
           </div>
           </div>

           {/* section two */}
           <div className="driver-info">
               <div className="container">
               <h2>Become <span>A Driver</span></h2>
               <p>No need to pay high commissions from your earnings.
                 When you drive with Safe, you keep all that you make. 
                Achieve your financial goals quicker when you drive with Safe.</p>
               </div>
           </div>

        {/* section three */}
        <div className="card-2-section">
        <div className="container grid">
            <Zoom left delay={500} duration={1000}>
            <div className="card driv">
                <Carditem
                src="./images/man13.jpeg"
                text="Flexibility"
                para="Drive whenever you want at your own time and schedule so you have more time for your family."
                />
            </div>
            </Zoom>
            <Zoom top delay={2000} duration={1000}>
            <div className="card driv">
                <Carditem
                src="./images/naira.jpg"
                text="Money"
                para="Now you can make money without commissions. You keep all your money."
                />
            </div>
            </Zoom>
            <Zoom right delay={1500} duration={1000}>
            <div className="card driv">
                <Carditem
                src="./images/sa1.jpg"
                text="Security"
                para="With our strict and friendly community guidelines, you can be rest assured of your safety."
                />
            </div>
            </Zoom>
        </div>
        </div>

        {/* section four */}
        <div className="driver-four">
            <div className="dfBg">
            <div className="container grid">
                <div className="div-4">
                    <i className="fas fa-user fa-3x"></i>
                    <h2>Make More Money with <span>Safe</span></h2>
                    <p>With our wide range of options from ride to freight and from driver to rider, 
                        you can now more make money than on any other platform out there.
                         Safe empowers you to be more.</p>
                         <div className="trav">
                        <Button buttonStyle="btn--outline" buttonSize="btn--large">Discover Safe</Button> 
                        <a href=""><i className="fas fa-play-circle"></i>Watch Video</a>
                        </div>
                </div>
                <div className="div-4">
                    <div className="driv-img-1">
                    <img src="./images/driv-1.png" alt="MEME"/>
                    </div>
                    <div className="driv-img-2">
                    <img src="./images/driv.png" alt="MEME"/>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <Footer/>
       </div>    
    )
}

import React from 'react'

export default function Carditem(props) {
    return (
       <div className="card-items">
           <figure className="card-items-wrap" data-category={props.label}>
               <img src={props.src} alt="MEME" className="card-image"/>
           </figure>
           <div className="card-info">
            <h3 className="card-text">{props.text}</h3>
            <p className="card-para">{props.para}</p>
           </div>
       </div>
    )
}

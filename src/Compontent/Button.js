import React from 'react'
import './Button.css';
import {Link} from 'react-router-dom';
const STYLES =['btn--primary','btn--outline'];
const SIZE = ['btn--small, btn--medium','btn--large']
export default function Button({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
}) {
    const checkButtonStyle = STYLES.includes(buttonStyle)?buttonStyle:STYLES[0];
    const checkButttonSize = SIZE.includes(buttonSize)?buttonSize:SIZE[0];
    return (
        <Link to="/" className="btn-mobile">
        <button className={`btn ${buttonStyle} ${buttonSize}`}
        onClick={onClick}
        type={type}
        >
         {children}
        </button>
    </Link>
    )
}

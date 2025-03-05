import React from "react";
import '../styles.css';

export default function Header() {
    return (
        <div className="header">
            <img className='logo' src='logo.png' alt='moviedux'></img>
            <h2>It's time for popcorn! Your Next movie here</h2>
        </div>
    )
}

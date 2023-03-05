import React from 'react'
import ReactDOM from 'react-dom/client'
export default function Navbar(){
    return(
        <nav>
            <h1><span>M</span>ovie<span>M</span>ania</h1>
            <div className='uldiv'>
                <ul>
                    <li className="nav-items"><a href="#">Home</a></li>
                    <li className="nav-items"><a href="#">About</a></li>
                    <li className="nav-items"><a href="#">Contact</a></li>
                    <li className="nav-items"><a href="#">Team</a></li>
                </ul>
            </div>
                <button className='navSearch'>Search</button>
        </nav>
    )
}
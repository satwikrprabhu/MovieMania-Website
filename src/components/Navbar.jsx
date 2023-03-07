import React from 'react'
import {motion} from 'framer-motion'
import Movie from './Movie'
import { Link } from 'react-router-dom'
export default function Navbar(){
    return(
        <nav>
            <h1 className='mmlogo'><Link to='/' className='mmanchor'><span>M</span>ovie<span>M</span>ania</Link></h1>
            <div className='uldiv'>
                <ul>
                <motion.li className="nav-items"
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                     transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    ><Link to='/' className='navLinks'>Home</Link></motion.li>
                    <motion.li className="nav-items"
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                     transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    ><a href="" className='navLinks'>About</a></motion.li>
                    <motion.li className="nav-items"
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                     transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    ><a href="" className='navLinks'>Contact</a></motion.li>
                    <motion.li className="nav-items"
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                     transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    ><a href="" className='navLinks'>Team</a></motion.li>
                </ul>
            </div>
            <Link to='/movies' className='moviebtn'><motion.button onClick={<Movie/>} className='navSearch'
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.9 }}
                 transition={{ type: "spring", stiffness: 400, damping: 17 }}
                 >Search</motion.button></Link>
                
        </nav>
    )
}
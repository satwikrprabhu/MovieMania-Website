import React from 'react'
import {motion} from 'framer-motion'
import Movie from './Movie'
export default function Navbar(){
    return(
        <nav>
            <h1 className='mmlogo'><span>M</span>ovie<span>M</span>ania</h1>
            <div className='uldiv'>
                <ul>
                <motion.li className="nav-items"
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                     transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    ><a href="">Home</a></motion.li>
                    <motion.li className="nav-items"
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                     transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    ><a href="">About</a></motion.li>
                    <motion.li className="nav-items"
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                     transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    ><a href="">Contact</a></motion.li>
                    <motion.li className="nav-items"
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                     transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    ><a href="">Team</a></motion.li>
                </ul>
            </div>
            <motion.button onClick={<Movie/>} className='navSearch'
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.9 }}
                 transition={{ type: "spring", stiffness: 400, damping: 17 }}
                 >Search</motion.button>
                
        </nav>
    )
}
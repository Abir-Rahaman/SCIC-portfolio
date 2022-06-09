
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png'
import {FaBars,FaTimes} from 'react-icons/fa'



const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClink = () =>{
        setNav(!nav)
    }
    return (
        <div className='w-full h-[80px] flex justify-between items-center px-4 bg-[#95bbd4] text-gray-300'>
        <div className="">
            <img src={logo}  alt="portfolio-logo" style={{width:'250px'}}/>
        </div>
            <ul className='md:flex hidden gap-9'>
            <li><a> <Link to="banner" smooth={true} duration={500} >Home</Link></a></li>
            <li><a> <Link to="about" smooth={true} duration={500} >About</Link></a></li>
            <li><a> <Link to="skill" smooth={true} duration={500} >Skills</Link></a></li>
            <li><a> <Link to="project" smooth={true} duration={500} >Work</Link></a></li>
            <li><a> <Link to="contact" smooth={true} duration={500} >Contact</Link></a></li>
            </ul>
     

        <div onClick={handleClink} className="md:hidden z-10 ">
          {!nav ? <FaBars></FaBars> : <FaTimes></FaTimes>}
        </div>

        <ul className={!nav ? 'hidden' : 'bg-[#3366a0] h-screen flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>
        
    </div>
    );
};

export default Navbar;
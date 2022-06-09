import React from 'react';
import Profile from '../assets/Profile-pic.png'
import {FaGithub} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {SiLinkedin} from 'react-icons/si'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {FaArrowRight } from 'react-icons/fa'

const Banner = () => {
    return (
           <div name='banner' class="hero mt-16 lg:px-0  px-20">
                <div class="hero-content px-0 flex-col lg:flex-row-reverse">
                    
                    <img src={Profile} class="max-w-sm rounded-lg" alt='' />
                    <div>
                   <div className="pr-0 lg:pr-40 lg:ml-28">
                        <p className='font-bold text-xl text-accent'>Asslamualaikum, my name is,</p>
                    <h1 className='text-6xl font-bold font-serif text-[#95bbd4] my-4'> Md Abir Rahaman</h1>
                    <h1 className='text-2xl font-bold text-accent my-4'> & I'm a MERN stack developer. I'm a dedicated web developer who focuses in React. </h1>
                   </div>
                   <div className="lg:ml-28">
                       <a href="https://drive.google.com/file/d/1AQg9oyC5oJ384BfANI0sWoOiDt7A5E5s/view?usp=sharing" target="_blank" rel="noopener noreferrer"> <button className='text-accent hover:bg-accent duration-700  font-bold hover:text-white border-2 border-accent px-4  py-3 flex items-center mt-6'> Download Resume <span className='hover:rotate-90  duration-500'> <FaArrowRight className='ml-3'></FaArrowRight></span> </button></a>

                    </div>
                    </div>
                </div>
                <div className=" md:flex fixed flex-col top-[40%] left-0">
                <ul className='px-8'>
                    <li className='w-[150px] h-[60px] flex justify-center ml-[-110px]  hover:ml-[20px] duration-300 bg-black hover:rounded-full'>
                        <a className='flex justify-between items-center  text-gray-300 ' 
                        href="https://github.com/Abir-Rahaman"  target="_blank" rel="noopener noreferrer">
                           Github <FaGithub className='ml-8'  size={35}></FaGithub>
                        </a>
                    </li>    
                 
                    <li className='w-[150px] h-[60px] flex justify-center ml-[-110px]   hover:ml-[20px] duration-300 hover:rounded-full bg-[#3366a0]'>
                        <a className='flex justify-between items-center  text-gray-300 hover:rounded-full' 
                        href="https://www.linkedin.com/in/md-abir-rahaman-2351a6213/" target="_blank" rel="noopener noreferrer">
                           Linkedin <SiLinkedin className='ml-6'  size={35}></SiLinkedin>
                        </a>
                    </li>    
                 
                    <li className='w-[150px] h-[60px] flex justify-center ml-[-110px] hover:ml-[20px] duration-300 bg-green-500 hover:rounded-full'>
                        <a className='flex justify-between items-center  text-gray-300 ' 
                        href="https://mail.google.com/mail/u/0/?tab=mm#inbox" target="_blank" rel="noopener noreferrer">
                           Email <MdEmail className='ml-11'  size={35}></MdEmail>
                        </a>
                    </li>    
                 
                    <li className='w-[150px] h-[60px] flex justify-center ml-[-110px]  hover:ml-[20px] duration-300 bg-red-400 hover:rounded-full'>
                        <a className='flex justify-between items-center  text-gray-300 ' 
                        href="https://drive.google.com/file/d/1AQg9oyC5oJ384BfANI0sWoOiDt7A5E5s/view" target="_blank" rel="noopener noreferrer">
                           Resume <BsFillPersonLinesFill className='ml-7'  size={35}></BsFillPersonLinesFill>
                        </a>
                    </li>    
                 
                    
                </ul>
            </div>
                </div>
    );
};

export default Banner;
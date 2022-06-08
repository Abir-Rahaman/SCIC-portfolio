import React from 'react';
import Profile from '../assets/Profile-pic.png'

const Banner = () => {
    return (
           <div class="hero mt-16 lg:px-0  px-20">
                <div class="hero-content px-0 flex-col lg:flex-row-reverse">
                    
                    <img src={Profile} class="max-w-sm rounded-lg" alt='' />
                    <div>
                   <div className="pr-0 lg:pr-60">
                        <p className='font-bold text-xl text-accent'>Asslamualaikum, my name is,</p>
                    <h1 className='text-6xl font-bold font-serif text-[#95bbd4] my-4'> Md Abir Rahaman</h1>
                    <h1 className='text-4xl font-bold text-accent my-4'> & I'm a MERN stack developer. </h1>
                    <p className='text-[#95bbd4] font-medium  text-justify text-2xl' >I'm a dedicated web developer who focuses in React.</p>
                   </div>
                    <button class="btn btn-accent mt-6">Download Resume</button>
                    </div>
                </div>
                </div>
    );
};

export default Banner;
import React from 'react';
import soon from '../assets/SOON.png'

const Blogs = () => {
    return (
        <div>
        <h3 className='text-4xl text-[#95bbd4] text-center font-bold  mt-24' >My Blogs...</h3>
        <img className='mx-auto' src={soon} alt="" />
        </div>
    );
};

export default Blogs;
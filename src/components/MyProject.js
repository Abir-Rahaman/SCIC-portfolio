import React from 'react';
import car from '../assets/car.png'
import bike from '../assets/bike.png'
import wed from '../assets/weding.png'
import gym from '../assets/gym.png'
import gear from '../assets/gear.png'
import com from '../assets/computer.png'

const MyProject = () => {
    return (
        <div name='project' className='' >
            <h3 className='text-4xl text-[#95bbd4] text-center font-bold mt-5' > Checkout Some Of My Recent Work... </h3>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:px-40 md:grid-cols-1  md:px-60 sm:px-24 mt-20 gap-24">
            <div class="card w-96 h-80 bg-base-100 shadow-xl">
                <div class="card-body">
                <button class="btn btn-outline btn-accent rounded-full">Click For Details</button>
                <figure><img className='w-fluid rounded-3xl hover:scale-110 duration-500 mt-6 '  src={com} alt="Shoes"  />
                </figure>
                </div>
                </div>
            <div class="card w-96 h-80 bg-base-100 shadow-xl">
                <div class="card-body">
                <button class="btn btn-outline btn-accent rounded-full">Click For Details</button>
                <figure><img className='w-fluid rounded-3xl hover:scale-110 duration-500 mt-6 ' src={bike} alt="Shoes" /></figure>
                </div>
                
                </div>
            <div class="card w-96 h-80 bg-base-100 shadow-xl">
                <div class="card-body">
                <button class="btn btn-outline btn-accent rounded-full">Click For Details</button>
                <figure><img className='w-fluid rounded-3xl hover:scale-110 duration-500 mt-6  ' src={gym} alt="Shoes"  /></figure>
                </div>
                
                </div>
            <div class="card w-96 h-80 bg-base-100 shadow-xl">
                <div class="card-body">
                <button class="btn btn-outline btn-accent rounded-full">Click For Details</button>
                <figure><img className='w-fluid rounded-3xl hover:scale-110 duration-500 mt-6 ' src={wed} alt="Shoes" /></figure>
                </div>
                
                </div>
            <div class="card w-96 h-80 bg-base-100 shadow-xl">
                <div class="card-body">
                   <button class="btn btn-outline btn-accent rounded-full">Click For Details</button>
                   <figure><img className='w-fluid rounded-3xl hover:scale-110 duration-500 mt-6 ' src={car} alt="Shoes" /></figure>
                </div>
                </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                <button class="btn btn-outline btn-accent rounded-full">Click For Details</button>
                <figure><img className='w-fluid rounded-3xl hover:scale-110 duration-500 mt-6 ' src={gear} alt="Shoes" /></figure>
                </div>
                
                </div>
            </div>  
        </div>
    );
};

export default MyProject;
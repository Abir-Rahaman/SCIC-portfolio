import React from 'react';
import html from '../assets/html.png'
import css from '../assets/css.png'
import bs from '../assets/bootstrap.png'
import js from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import firebase from '../assets/firebase.png'
import node from '../assets/node.png'
import mongo from '../assets/mongo.png'

const Skill = () => {
    return (
        <div name='skill' className='text-[#95bbd4] lg:px-96 md:px-44' >
            <div className="text-center">
                <p className='text-4xl inline border-b-4 border-accent'>My Skills</p>
                <p className='text-2xl mt-8'> These Are Technologies I'he worked with</p>
            </div>
              <div className="grid lg:grid-cols-4 grid-cols-2">
              <div class="card w-full bg-base-100  mt-9">
            <div class="card-body hover:scale-150 duration-500 ">
                <img className='w-24 mx-auto mt-8' src={html} alt="" />
                <p className='my-4 text-accent text-center font-bold'>HTML5</p>
                
            </div>
            </div>
            <div class="card  w-full bg-base-100  mt-9">
            <div class="card-body hover:scale-150 duration-500 ">
                <img className='w-24 mx-auto mt-8' src={css} alt="" />
                <p className='my-4 text-accent text-center font-bold'> CSS3</p>
                
            </div>
            </div>
            <div class="card  w-full bg-base-100  mt-9">
            <div class="card-body hover:scale-150 duration-500 ">
                <img className='w-24 mx-auto mt-8' src={bs} alt="" />
                <p className='my-4 text-accent text-center font-bold'> BOOTSTRAP5 </p>
                
            </div>
            </div>
            <div class="card  w-full bg-base-100  mt-9">
            <div class="card-body hover:scale-150 duration-500 ">
                <img className='w-24 mx-auto mt-8' src={js} alt="" />
                <p className='my-4 text-accent text-center font-bold'> JAVASCRIPT </p>
                
            </div>
            </div>
            <div class="card  w-full bg-base-100  mt-9">
            <div class="card-body hover:scale-150 duration-500 ">
                <img className='w-24 mx-auto mt-8' src={tailwind} alt="" />
                <p className='my-4 text-accent text-center font-bold'> TAILWIND </p>
                
            </div>
            </div>
            <div class="card  w-full bg-base-100  mt-9">
            <div class="card-body hover:scale-150 duration-500 ">
                <img className='w-24 mx-auto mt-8' src={react} alt="" />
                <p className='my-4 text-accent text-center font-bold'> REACT </p>
                
            </div>
            </div>
            <div class="card  w-full bg-base-100  mt-9">
            <div class="card-body hover:scale-150 duration-500 ">
                <img className='w-24 mx-auto mt-8' src={firebase} alt="" />
                <p className='my-4 text-accent text-center font-bold'> FIREBASE </p>
                
            </div>
            </div>
            <div class="card w-full bg-base-100  mt-9">
            <div class="card-body hover:scale-150 duration-500 ">
                <img className='w-24 mx-auto mt-8' src={node} alt="" />
                <p className='my-4 text-accent text-center font-bold'> NODE JS </p>
                
            </div>
            </div>
            <div class="card  w-full bg-base-100  mt-9">
            <div class="card-body hover:scale-150 duration-500 ">
                <img className='w-24 mx-auto mt-8' src={mongo} alt="" />
                <p className='my-4 text-accent text-center font-bold'> MONGO DB </p>
                
            </div>
            </div>
              </div>
            </div>

    );
};

export default Skill;
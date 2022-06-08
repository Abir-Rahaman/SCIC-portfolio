import React from 'react';
import about from '../assets/about.png'
const About = () => {
    return (
        <div class="hero lg:px-0  px-20">
                <div class="hero-content px-0 flex-col lg:flex-row-reverse">
                    <div className=' shadow-2xl py-8 px-24  border-4 border-accent rounded-3xl'>
                   <div className="pr-0 lg:pr-96  mb-10">
                       <p className='text-4xl font-bold inline border-b-4 border-accent text-[#95bbd4]'> About  </p>
                   </div>
                 <div className="">
                 <p className='text-[#95bbd4] font-medium '> Expertise in front-end technologies, including Html5, CSS3, JavaScript(Intermidiate),Typescript and libraries such as React Js, Bootstrap5, Tailwind, DaisyUI .Knowledge of server-side programming languages including MongoDB, Node Js, Express Js.I'm mostly interested in developing responsive full-stack web applications. Please see my resume for further information.</p>
                 </div>
                    </div>
                    <img src={about} class="w-full rounded-lg" alt='' />
                </div>
                </div>
    );
};

export default About;
import React from 'react';
import about from '../assets/about.png'
import bout from '../assets/about.JPG'

const About = () => {
    return (
        <div name="about" class="hero lg:px-0  px-20">
                <div class="hero-content px-0 flex-col lg:flex-row-reverse">
                    <div className=' shadow-2xl py-8 px-24  border-4 border-accent rounded-3xl'>
                   <div className="pr-0 lg:pr-96  mb-10">
                       <p className='text-4xl font-bold inline border-b-4 border-accent text-[#95bbd4]'> About  </p>
                   </div>
                 <div className="">
                 <p className='text-[#95bbd4] font-medium '> Expertise in front-end technologies, including Html5, CSS3, JavaScript(Intermidiate),Typescript and libraries such as React Js, Bootstrap5, Tailwind, DaisyUI .Knowledge of server-side programming languages including MongoDB, Node Js, Express Js.I'm mostly interested in developing responsive full-stack web applications. Please see my resume for further information.</p>
                <div className="">
                <label for="my-modal-0" className="btn btn-outline btn-accent mt-6"> More Information? </label>
                <input type="checkbox" id="my-modal-0" class="modal-toggle"/>
                <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <div className="">
                    <img className='mx-auto border-4 border-accent rounded-full ' src={bout} alt="" />
                        <p className='text-center font-bold text-[#95bbd4] mt-8'>
                        My name is Abir Rahaman.student of CSE Department at Daffodil International University. i have completed his SSC & HSC from Dhaka Board. now i am working on web development sector. i am a Jr. MERN Stack Developer.My hobby is i want to travel the the whole world i have already visited many place of Bangladesh, and at the end of my life goal as a human being i want to lead my life very simple as a muslim.
                        </p>
                        <p className='text-center font-bold text-[#95bbd4] mt-8'>
                           For More Qurey Please Check My resume. Thanks In Advanced.    
                        </p>
                    </div>
                    <div class="modal-action">
                    <label for="my-modal-0" class="btn btn-sm btn-circle btn-accent absolute right-2 top-2">✕</label>
                    </div>
                </div>
                </div>
                </div>
                 </div>
                    </div>
                    <img src={about} class="w-full rounded-lg" alt='' />
                </div>
                </div>
    );
};

export default About;
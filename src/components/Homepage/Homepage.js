import React from 'react';
import Navbar from '../../Shared/Navbar';
import About from '../About';
import Banner from '../Banner';
import Skill from '../Skill';


const Homepage = () => {
    return (
        <div>
            <Navbar>
               <Banner></Banner>
               <About></About>
               <Skill></Skill>
            </Navbar>
           
        </div>
    );
};

export default Homepage;
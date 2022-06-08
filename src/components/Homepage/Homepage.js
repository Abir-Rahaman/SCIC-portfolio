import React from 'react';
import Navbar from '../../Shared/Navbar';
import About from '../About';
import Banner from '../Banner';


const Homepage = () => {
    return (
        <div>
            <Navbar>
               <Banner></Banner>
               <About></About>
            </Navbar>
           
        </div>
    );
};

export default Homepage;
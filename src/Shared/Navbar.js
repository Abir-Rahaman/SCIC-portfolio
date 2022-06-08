import React from 'react';
import logo from '../assets/logo.png'

const Navbar = ({children}) => {
    return (
        <div>
            <div class="drawer drawer-end">
                    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
                    <div class="drawer-content flex flex-col">
                        <div class="w-full h-20 navbar bg-accent px-24">
                        <div class="flex-1 h-24 px-2 mx-2"><img className=' w-56 ' src={logo} alt="" /> </div>
                        <div class="flex-none hidden lg:block">
                            <ul class="menu menu-horizontal font-bold ">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Skills</a></li>
                            <li><a>Work</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                        </div>
                        <div class="flex-none lg:hidden">
                            <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div> 
                        </div>

                        {children}
                    </div> 
                    <div class="drawer-side ">
                        <label for="my-drawer-3" class="drawer-overlay"></label> 
                        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Skills</a></li>
                        <li><a>Work</a></li>
                        <li><a>Contact</a></li>
                        
                        </ul>
                        
                    </div>
                    </div>
        </div>
    );
};

export default Navbar;
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
            <div className="grid lg:grid-cols-3  lg:px-40  md:grid-cols-1 md:px-60 mt-20 gap-24">
            <div class="card lg:w-96 h-80 sm:w-80 bg-base-100 shadow-xl">
                <div class="card-body">
                       <label for="my-modal-1" className="btn btn-outline btn-accent rounded-full">Click For Details</label>
                <input type="checkbox" id="my-modal-1" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-bold text-accent"> Project Name: Computer Parts Website</h3>
                    <p class="py-4 text-bold">Description – <br />
                                • Authentication System Implement by Firebase. <br />
                                • Implement JWT Token for Authorization. User Dashboard (See products, Check,
                                    Purchase, Cancel, Payment) <br />
                                • Admin Dashboard (Make Admin, Add Products, Remove, Manage Orders)    
                                </p>
                    <p class="py-4 text-bold">Technology Used – <br />
                                            • React JS <br />
                                            • Firebase <br />
                                            • React Bootstrap<br />
                                            • Firebase Hooks  <br />
                                            • React Form <br />
                                            • DaisyUI <br />
                                            • MongoDB <br />
                                            • Express <br />
                                            • Node <br />
                                             </p>              
              <a href="https://github.com/Abir-Rahaman/Manufacturer-And-Restore-Project-Using-Mongo-DB-Express-React-Node-Client-side" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-accent rounded-full mr-6">Client Side Code Link</button></a> 
              <a href="https://github.com/Abir-Rahaman/Manufacturer-And-Restore-Project-Using-Mongo-DB-Express-React-Node-Server-side" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-accent rounded-full mr-6">Server Side Code Link</button></a>              
              <a href="https://assignment-12-authentication.web.app/" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-accent rounded-full mr-6 mt-6">Live Link</button></a>                

                    <div class="modal-action">
                    <label for="my-modal-1" className="btn btn-outline btn-accent rounded-full">Okay</label>
                    </div>
                </div>
                </div>
                <figure><img className='w-fluid rounded-3xl hover:scale-110 duration-500 mt-6 '  src={com} alt="Shoes"  />
                </figure>
                </div>
                </div>
            <div class="card lg:w-96 sm:w-80 h-80 bg-base-100 shadow-xl">
                <div class="card-body">
                <label for="my-modal-2" className="btn btn-outline btn-accent rounded-full">Click For Details</label>
                <input type="checkbox" id="my-modal-2" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-bold text-accent"> Project Name: Bike Warehouse Website</h3>
                    <p class="py-4 text-bold">Description – <br />
                    • This is a full-stack project for a warehouse management system website, where an
                        authentic user can control product stock quantities and create, update, and delete. <br />
                        • This is a full-stack project for a warehouse management system website, where an
                        authentic user can control product stock quantities and create, update, and delete. <br />
                      • After Login User Access All Products, Add Update, Delete from Database.    
                                </p>
                    <p class="py-4 text-bold">Technology Used – <br />
                                            • React JS <br />
                                            • Firebase <br />
                                            • React Bootstrap<br />
                                            • Firebase Hooks  <br />
                                            • React Form <br />
                                            • MongoDB <br />
                                            • Express <br />
                                            • Node <br />
                                             </p>              
              <a href="https://github.com/Abir-Rahaman/Bike-Stock-Warehouse-Website-Using-Mongo-DB-Express-React-Node-Clinet-Side" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-accent rounded-full mr-6">Client Side Code Link</button></a> 
              <a href="https://github.com/Abir-Rahaman/Bike-Stock-Warehouse-Wesite-Using-Mongo-DB-Express-React-Node-Server-side" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-accent rounded-full mr-6">Server Side Code Link</button></a>              
              <a href="https://assingment-11-auth.web.app/" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-accent rounded-full mr-6 mt-6">Live Link</button></a>                

                    <div class="modal-action">
                    <label for="my-modal-2" className="btn btn-outline btn-accent rounded-full">Okay</label>
                    </div>
                </div>
                </div>
                <figure><img className='w-fluid rounded-3xl hover:scale-110 duration-500 mt-6 ' src={bike} alt="Shoes" /></figure>
                </div>
                
                </div>
            <div class="card lg:w-96 sm:w-80 h-80 bg-base-100 shadow-xl">
                <div class="card-body">
                <label for="my-modal-3" className="btn btn-outline btn-accent rounded-full">Click For Details</label>
                <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-bold text-accent"> Project Name: Fitex & Gym Outfits</h3>
                    <p class="py-4 text-bold">Description – <br />
                                            • This Projects Basically a gym website where you can exercise and buy Gym equipment. <br />
                                            • Authentication System (Log in, Register, Reset Password, Email Verification) </p>
                    <p class="py-4 text-bold">Technology Used – <br />
                                            • React JS, <br />
                                            • Firebase <br />
                                            • React Bootstrap, <br />
                                            • React Rechart <br />
                                            • react-router-dom <br />
                                            • react-Toast <br /> </p>
                  
              <a href="https://github.com/Abir-Rahaman/Gym-Trainer-Gym-Products-Website-Using-React" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-accent rounded-full mr-6">Code Link</button></a>                
              <a href="https://assignment-10--auth.web.app/" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-accent rounded-full mr-6">Live Link</button></a>                

                    <div class="modal-action">
                    <label for="my-modal-3" className="btn btn-outline btn-accent rounded-full">Okay</label>
                    </div>
                </div>
                </div>
                <figure><img className='w-fluid rounded-3xl hover:scale-110 duration-500 mt-6  ' src={gym} alt="Shoes"  /></figure>
                </div>
                
                </div>
            <div class="card lg:w-96 sm:w-80 h-80 bg-base-100 shadow-xl">
                <div class="card-body">
                <label for="my-modal-4" className="btn btn-outline btn-accent rounded-full">Click For Details</label>
                <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-bold text-accent"> Project Name: Lamborgini Car Service Center & Workshop</h3>
                    <p class="py-4 text-bold">Descriptio – <br />
                                            • Implemented React Routes. <br />
                                            • Implemented Dashboard <br />
                                            • Implemented Nice Design With Responsiveness </p>
                    <p class="py-4 text-bold">Technology Used – <br />
                                            • React JS, <br />
                                            • React Rechart <br />
                                            • react-router-dom <br />
                                            • React Bootstrap, </p>
                  
              <a href="https://github.com/Abir-Rahaman/Lamborgini-Car-Review-Web-Site-with-Dashboard-using-React" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-accent rounded-full mr-6">Code Link</button></a>                
              <a href="https://incomparable-alfajores-3fd46a.netlify.app/" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-accent rounded-full mr-6">Live Link</button></a>                

                    <div class="modal-action">
                    <label for="my-modal-4" className="btn btn-outline btn-accent rounded-full">Okay</label>
                    </div>
                </div>
                </div>
                
                <figure><img className='w-fluid rounded-3xl hover:scale-110 duration-500 mt-6 ' src={car} alt="Shoes" /></figure>
                </div>
                
                </div>
            <div class="card lg:w-96 sm:w-80 h-80 bg-base-100 shadow-xl">
                <div class="card-body">
                <label for="my-modal-5" className="btn btn-outline btn-accent rounded-full">Click For Details</label>
                <input type="checkbox" id="my-modal-5" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-bold text-accent"> Project Name: WEEDING CORNER </h3>
                    <p class="py-4 text-bold">Description – <br />
                                            • Implemented Bootstrap Caursol<br />
                                            • Implemented Bootstrap Card <br />
                                            • Implemented Bootstrap Accordion  </p>
                    <p class="py-4 text-bold">Technology Used – <br />
                                            • Advanced Bootstrap. </p>
                  
              <a href="https://github.com/Abir-Rahaman/Wedding-Website-using-Bootstrap" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-accent rounded-full mr-6">Code Link</button></a>                
              <a href="https://wedding-website-by-abir-rahaman.netlify.app/" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-accent rounded-full mr-6">Live Link</button></a>                

                    <div class="modal-action">
                    <label for="my-modal-5" className="btn btn-outline btn-accent rounded-full">Okay</label>
                    </div>
                </div>
                </div>
                   <figure><img className='w-fluid rounded-3xl hover:scale-110 duration-500 mt-6 ' src={wed} alt="Shoes" /></figure>
                </div>
                </div>
            <div class="card lg:w-96 sm:w-80 h-80 bg-base-100 shadow-xl">
                <div class="card-body">
                <label for="my-modal-6" className="btn btn-outline btn-accent rounded-full">Click For Details</label>
                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-bold text-accent"> Project Name: Influencer products </h3>
                    <p class="py-4 text-bold">Description – <br />
                                            • Implemented Bootstrap Card <br />
                                            • Implemented Bootstrap Responsiveness  </p>
                    <p class="py-4 text-bold">Technology Used – <br />
                                            • Advanced Bootstrap. </p>
                  
              <a href="https://github.com/Abir-Rahaman/influencer-gear-2nd-Assignment-" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-accent rounded-full mr-6">Code Link</button></a>                
              <a href="https://abir-rahaman.github.io/influencer-gear-2nd-Assignment-/" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-accent rounded-full mr-6">Live Link</button></a>                

                    <div class="modal-action">
                    <label for="my-modal-6" className="btn btn-outline btn-accent rounded-full">Okay</label>
                    </div>
                </div>
                </div>
                <figure><img className='w-fluid rounded-3xl hover:scale-110 duration-500 mt-6 ' src={gear} alt="Shoes" /></figure>
                </div>
                
                </div>
            </div>  
        </div>
    );
};

export default MyProject;
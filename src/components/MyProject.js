import React from 'react';
import car from '../assets/car.png'
import bike from '../assets/bike.png'
import wed from '../assets/weding.png'
import gym from '../assets/gym.png'
import gear from '../assets/gear.png'
import com from '../assets/computer.png'
import pic1 from '../assets/baro.png'
import pic2 from '../assets/baroo.png'
import pic3 from '../assets/barrooo.png'
import pic4 from '../assets/egro.png'
import pic5 from '../assets/egroo.png'
import pic6 from '../assets/egrooo.png'
import pic7 from '../assets/dos.png'
import pic8 from '../assets/doos.png'
import pic9 from '../assets/doooos.png'
import pic10 from '../assets/wed.png'
import pic11 from '../assets/weeed.png'
import pic12 from '../assets/weeeeeeed.png'
import pic13 from '../assets/ccar.png'
import pic14 from '../assets/caar.png'
import pic15 from '../assets/caaar.png'
import pic16 from '../assets/glear.png'
import pic17 from '../assets/gearr.png'
import pic18 from '../assets/home.png'


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

             <h3 class="font-bold text-lg text-bold text-accent text-center mb-3"> Project Review </h3>   
             <div className="w-80 mx-auto">
                <p className='text-center'><small className='text-accent font-bold '>Home Page</small></p>
                <img className='border-4 border-accent rounded-3xl  mb-6' src={pic1} alt="" />
                <p className='text-center'><small className='text-accent font-bold '>Dashboard Page</small></p>
                <img className='border-4 border-accent rounded-3xl mb-6' src={pic2} alt="" />
                <p className='text-center'><small className='text-accent font-bold '>Products Page</small></p>
                <img className='border-4 border-accent rounded-3xl mb-6 ' src={pic3} alt="" />
              </div>                       
              <a href="https://github.com/Abir-Rahaman/Manufacturer-And-Restore-Project-Using-Mongo-DB-Express-React-Node-Client-side" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-accent rounded-full mr-6">Client Side</button></a> 
              <a href="https://github.com/Abir-Rahaman/Manufacturer-And-Restore-Project-Using-Mongo-DB-Express-React-Node-Server-side" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-accent rounded-full mr-6">Server Side</button></a>              
              <a href="https://assignment-12-authentication.web.app/" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-accent rounded-full mr-6 mt-6">Live Link</button></a>                

                    <div class="modal-action">
                    <label for="my-modal-1" class="btn btn-sm btn-circle btn-accent absolute right-2 top-2">✕</label>
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
                <h3 class="font-bold text-lg text-bold text-accent text-center mb-3"> Project Review </h3>   
                <div className="w-80 mx-auto">
                <p className='text-center'><small className='text-accent font-bold '>Home Page</small></p>
                <img className='border-4 border-accent rounded-3xl  mb-6' src={pic4} alt="" />
                <p className='text-center'><small className='text-accent font-bold '>Main Page</small></p>
                <img className='border-4 border-accent rounded-3xl mb-6' src={pic5} alt="" />
                <p className='text-center'><small className='text-accent font-bold '>Add Products Page</small></p>
                <img className='border-4 border-accent rounded-3xl mb-6 ' src={pic6} alt="" />
              </div>                  
              <a href="https://github.com/Abir-Rahaman/Bike-Stock-Warehouse-Website-Using-Mongo-DB-Express-React-Node-Clinet-Side" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-accent rounded-full mr-6">Client Side </button></a> 
              <a href="https://github.com/Abir-Rahaman/Bike-Stock-Warehouse-Wesite-Using-Mongo-DB-Express-React-Node-Server-side" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-accent rounded-full mr-6">Server Side </button></a>              
              <a href="https://assingment-11-auth.web.app/" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-accent rounded-full mr-6 mt-6">Live Link</button></a>                

                    <div class="modal-action">
                    <label for="my-modal-2" class="btn btn-sm btn-circle btn-accent absolute right-2 top-2">✕</label>
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
                <h3 class="font-bold text-lg text-bold text-accent text-center mb-3"> Project Review </h3>   
                <div className="w-80 mx-auto">
                <p className='text-center'><small className='text-accent font-bold '>Home Page</small></p>
                <img className='border-4 border-accent rounded-3xl  mb-6' src={pic7} alt="" />
                <p className='text-center'><small className='text-accent font-bold '>Main Page</small></p>
                <img className='border-4 border-accent rounded-3xl mb-6' src={pic8} alt="" />
                <p className='text-center'><small className='text-accent font-bold '>Login system </small></p>
                <img className='border-4 border-accent rounded-3xl mb-6 ' src={pic9} alt="" />
              </div>       
                  
              <a href="https://github.com/Abir-Rahaman/Gym-Trainer-Gym-Products-Website-Using-React" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-accent rounded-full mr-6">Code Link</button></a>                
              <a href="https://assignment-10--auth.web.app/" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-accent rounded-full mr-6">Live Link</button></a>                

                    <div class="modal-action">
                    <label for="my-modal-3" class="btn btn-sm btn-circle btn-accent absolute right-2 top-2">✕</label>
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
                <h3 class="font-bold text-lg text-bold text-accent text-center mb-3"> Project Review </h3>   
                <div className="w-80 mx-auto">
                <p className='text-center'><small className='text-accent font-bold '>Home Page</small></p>
                <img className='border-4 border-accent rounded-3xl  mb-6' src={pic13} alt="" />
                <p className='text-center'><small className='text-accent font-bold '>Main Page</small></p>
                <img className='border-4 border-accent rounded-3xl mb-6' src={pic14} alt="" />
                <p className='text-center'><small className='text-accent font-bold '>Dashboard Page</small></p>
                <img className='border-4 border-accent rounded-3xl mb-6 ' src={pic15} alt="" />
              </div> 
              <a href="https://github.com/Abir-Rahaman/Lamborgini-Car-Review-Web-Site-with-Dashboard-using-React" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-accent rounded-full mr-6">Code Link</button></a>                
              <a href="https://incomparable-alfajores-3fd46a.netlify.app/" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-accent rounded-full mr-6">Live Link</button></a>                

                    <div class="modal-action">
                    <label for="my-modal-4" class="btn btn-sm btn-circle btn-accent absolute right-2 top-2">✕</label>

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
               <h3 class="font-bold text-lg text-bold text-accent text-center mb-3"> Project Review </h3>   
                <div className="w-80 mx-auto">
                <p className='text-center'><small className='text-accent font-bold '>Home Page</small></p>
                <img className='border-4 border-accent rounded-3xl  mb-6' src={pic10} alt="" />
                <p className='text-center'><small className='text-accent font-bold '>Main Page</small></p>
                <img className='border-4 border-accent rounded-3xl mb-6' src={pic11} alt="" />
                <p className='text-center'><small className='text-accent font-bold '>Client Review</small></p>
                <img className='border-4 border-accent rounded-3xl mb-6 ' src={pic12} alt="" />
              </div> 
              <a href="https://github.com/Abir-Rahaman/Wedding-Website-using-Bootstrap" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-accent rounded-full mr-6">Code Link</button></a>                
              <a href="https://wedding-website-by-abir-rahaman.netlify.app/" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-accent rounded-full mr-6">Live Link</button></a>                

                    <div class="modal-action">
                    <label for="my-modal-5" class="btn btn-sm btn-circle btn-accent absolute right-2 top-2">✕</label>
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
                 <h3 class="font-bold text-lg text-bold text-accent text-center mb-3"> Project Review </h3>   
                <div className="w-80 mx-auto">
                <p className='text-center'><small className='text-accent font-bold '>Home Page</small></p>
                <img className='border-4 border-accent rounded-3xl  mb-6' src={pic18} alt="" />
                <p className='text-center'><small className='text-accent font-bold '>Main Page</small></p>
                <img className='border-4 border-accent rounded-3xl mb-6' src={pic16} alt="" />
                <p className='text-center'><small className='text-accent font-bold '>Blog Page</small></p>
                <img className='border-4 border-accent rounded-3xl mb-6 ' src={pic17} alt="" />
              </div> 
                  
              <a href="https://github.com/Abir-Rahaman/influencer-gear-2nd-Assignment-" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-accent rounded-full mr-6">Code Link</button></a>                
              <a href="https://abir-rahaman.github.io/influencer-gear-2nd-Assignment-/" target="_blank" rel="noopener noreferrer"><button class="btn btn-outline btn-accent rounded-full mr-6">Live Link</button></a>                

                    <div class="modal-action">
                    <label for="my-modal-6" class="btn btn-sm btn-circle btn-accent absolute right-2 top-2">✕</label>
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
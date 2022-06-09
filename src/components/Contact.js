import React from 'react';

const Contact = () => {
    return (
        <div name='contact' className=''>
            <h1 className='text-4xl text-accent text-center mt-8 font-bold'> CONTACT </h1>
            <p className='text-xl font-bold text-center text-accent mt-4'>Submit The Form or shoot me an email.  </p>
            <div className="mx-auto">
            <div class="hero  ">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div class="card  w-screen">
                        <div class="card-body mx-auto w-6/12">
                           <form method='POST' action="https://getform.io/f/7067b325-0165-4120-8a11-ee011c81044d">
                           <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' required class="input input-bordered" />
                            </div>
                            <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Email</span>
                            </label>
                            <input type="email" placeholder="Email" name='email' class="input input-bordered" />
                            </div>
                            <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Message</span>
                            </label>
                            <textarea type="text" rows='6' placeholder="How Can I help You.." name='box' class="textarea textarea-bordered" />
                            </div>
                            <div class="form-control mt-6">
                            <button class="btn btn-accent rounded-full">Submit </button>
                            </div>
                           </form>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
            
        </div>
    );
};

export default Contact;
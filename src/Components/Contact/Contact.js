import React from 'react';
import back from '../../assets/images/bg.png'

const Contact = () => {
    return (
        <div  style={{background:`url(${back})`} } className=' text-center'>
           <div>
               <h1 className='font-bold text-xl text-primary'>Contact us</h1>
               <h1 className='font-bold text-3xl text-primary'>Stay contact with us</h1>
   <div>
   <div className="card shadow-2xl lg:max-w-lg ">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
   </div>
  </div>
</div>
          
    );
};

export default Contact;
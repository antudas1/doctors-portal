import React from 'react';
import Service from '../Service/Service';
import fluoride from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png'
import whiting from '../../../../assets/images/whitening.png'
import treatment from '../../../../assets/images/treatment.png'
import MakeAppointment from '../MakeAppointmet/MakeAppointment';

const Services = () => {
    return (
        <div>
            <h1 className=' font-bold text-center text-primary mt-12'>Our sirvices</h1>
            <h1 className=' text-2xl'>Services we provide</h1>
            <div className='  grid grid-cols-1  lg:grid-cols-3  px-12'>
                <Service img={fluoride} titele={<p>Fluoride Treatment</p>}></Service>
                <Service img={cavity} titele={<p>Cavity Filling</p>}></Service>
                <Service img={whiting} titele={<p>Teeth Whitening</p>}></Service>
            </div>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <img width='458' height='576' src={treatment} />
    <div>
      <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className=" btn bg-gradient-to-r from-blue-500 to-primary">Get Started</button>
    </div>
  </div>
</div>
<MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Services;
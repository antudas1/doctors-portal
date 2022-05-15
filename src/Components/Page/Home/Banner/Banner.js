import src from 'daisyui';
import React from 'react';
import Chair1 from '../../../../assets/images/chair.png';
import Bg from '../../../../assets/images/bg.png'
import Info from '../../../Info/Info';

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img height='355' width='594' src={Chair1}/>
                <div>
                    <h1 className="text-5xl font-bold">Your new smile start here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary uppercase text-white  font-bold mr-96 bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>
                </div>
            </div>
            <div className='bg-[url$`/src/assets/images/bg.png`]'>
                <img width='1363' height='600' style={{}} src={Bg} alt="" />
            </div>
        </div>
    );
};

export default Banner;
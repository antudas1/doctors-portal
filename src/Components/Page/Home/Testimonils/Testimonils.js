import React, { useState } from 'react';
import quite from '../../../../assets/icons/quote.svg'
import people from '../../../../assets/images/people1.png';
import people1 from '../../../../assets/images/people2.png';
import people3 from '../../../../assets/images/people1.png';
import Review from '../Review/Review';


const Testimonils = () => {
    const reviews =[
        {
            _id:1,
            name:'willson Harry',
            review:'review',
            img:people,
        },
        {
            _id:2,
            name:'millson Harry',
            review:'review',
            img:people1,
        },
        {
            _id:3,
            name:'villson Harry',
            review:'review',
            img:people3,
        }
    ]

    return (
        <section>
            <div className='flex justify-between mt-10 px-12'>
            <div>
            <h1 className='text-primary font-bold text-xl'>Testimonil</h1>
            <h1 className=' text-3xl'>What our patients says</h1>
            </div>
            <div>
                <img className='' width='192' height='156' src={quite} alt="" />
            </div>
            
        </div>
        <div className='  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                reviews.map(review=><Review key={review._id} review={review}></Review>)
            }
        </div>
        </section>
    );
};

export default Testimonils;
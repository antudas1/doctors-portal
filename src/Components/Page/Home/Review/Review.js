import React from 'react';

const Review = ({ review }) => {
  
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl px-16">
            <div className="card-body">
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="">
                    <div className="avatar flex items-center justify-center align-center">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img className=' w-64 h-64' src={review.img} />
                        </div>
                        <div>
                        <h4 className='text-xl'>{review.name}</h4>
                        <p>{review.review}</p>
                    </div>
                    </div>
                   
                </div>

            </div>
        </div>
    );
};

export default Review;
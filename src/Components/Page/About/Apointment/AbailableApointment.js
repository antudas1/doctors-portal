import React from 'react';

const AbailableApointment = ({service,setTreaatment}) => {
    const {name,id,slot}= service
    return (
        <div>
            <div class=" text-center items-center card lg:max-w-lg">
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-primary font-bold text-2xl ">{name}</h2>

                    <p>
                     {slot.length>0 ? <span>{slot[0]}</span>:<span className=' text-red-500'>No slot available/Try another day</span>}
                    </p>

                    <p className=' text-black'>{slot.length} {slot.length>1 ?'spaces':'space'} available</p>
                    <div class="card-actions justify-end">
                     
                         <label for="booking-modal-6"
                          disabled={slot.length === 0} 
                          onClick={()=>setTreaatment(service)}
                         
                         class="btn modal-button bg-gradient-to-r from-cyan-500 to-blue-600 uppercase ">BookAppointment</label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AbailableApointment;
import { format } from 'date-fns';
import React, { useEffect } from 'react';
import {useState} from 'react'
import AbailableApointment from './AbailableApointment';
import BookingModal from './BookingModal';

const AbailableApointments = ({date}) => {
const [services,setServices]= useState([])
const [treatment,setTreaatment]= useState(null);

    useEffect(()=>{
        fetch ('http://localhost:5000/service')
    .then( res=>res.json())
    .then (data=>setServices(data))
    },[])
    return (
        <div>
            <h1 className=' text-2xl text-primary'>Available Appointment {format(date,'pp')}</h1>
         <div  className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
         {
              services.map(service=><AbailableApointment key={service._id} service={service} setTreaatment={setTreaatment}></AbailableApointment>)
          }
         </div>
          {treatment&& <BookingModal data={date} treatment={treatment} setTreaatment={setTreaatment}></BookingModal>}
        </div>
    );
};

export default AbailableApointments;
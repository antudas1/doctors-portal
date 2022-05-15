import React, { useState } from 'react';
import ApointmentBanner from './ApointmentBanner';
import Footer from '../../Shared/Footer/Footer'
import AbailableApointments from './AbailableApointments';
const Apointment = () => {
    const [date,setDate]=useState(new Date())
    return (
        <div>
           <ApointmentBanner date={date} setDate={setDate}></ApointmentBanner>
           <AbailableApointments date={date}></AbailableApointments>
           <Footer></Footer>
        </div>
    );
};

export default Apointment;
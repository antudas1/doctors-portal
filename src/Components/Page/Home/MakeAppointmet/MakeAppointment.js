import React from 'react';
import doctor from '../../././../../assets/images/doctor.png'
import appointment from '../../././../../assets/images/appointment.png'
import PrimaryButton from '../../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{background:`url(${  appointment})`}} className='flex justify-center items-center  mt-28'>
            <div  className='flex-1 hidden lg:block'>
                <img className='mt-[-130px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl  text-primary '>Appointment</h3>
                <h2 className=' text-white text-3xl uppercase'>Make an Appointment today</h2>
                <p  className=' text-white text-xl'>Hellow sir to take our servic and help pls appointmet today your pattion</p>
                <PrimaryButton></PrimaryButton>
            </div>
            
        </section>
    );
};

export default MakeAppointment;
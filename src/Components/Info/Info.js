import React from 'react';
import path from '../../assets/icons/clock.svg'
import path2 from '../../assets/icons/marker.svg'
import path3 from '../../assets/icons/phone.svg'


import InfoCard from './InfoCard/InfoCard';

const Info = () => {
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
        <InfoCard bgClass="bg-gradient-to-r from-cyan-500 to-blue-500" img={path} cardTitle={<p>Opening hours</p>}></InfoCard>
        <InfoCard bgClass=' bg-primary' img={path2} cardTitle={<p>Visit our location</p>}></InfoCard>
        <InfoCard bgClass='bg-gradient-to-r from-cyan-500 to-blue-500' img={path3} cardTitle={<p>Contact us</p>}></InfoCard>
            
            
        </div>
    );
};

export default Info;
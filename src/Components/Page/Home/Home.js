import React from 'react';
import Contact from '../../Contact/Contact';
import Info from '../../Info/Info';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from './Banner/Banner';
import Services from './Sirvices/Services';
import Testimonils from './Testimonils/Testimonils';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Testimonils></Testimonils>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
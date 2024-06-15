import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import HeroSection from '../components/Home1';

const Home = () => {
    return (
        <div className='flex flex-col'>
            <Navbar />
            <HeroSection/>
            <Footer/>
            {/* Additional sections or components can be added here */}
        </div>
    );
}

export default Home;

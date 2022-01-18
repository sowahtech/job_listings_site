import React from 'react';
import backgroundImg from '../images/cong7.jpg';
import Nav from './Nav';
import Footer from './Footer'

const Home = () => {
    return (
        <div>
            <Nav />
            <div id='home-img'>
                <img src ={backgroundImg} alt='hr congratulating a new employee' className='home-img'/>
            </div>
            <Footer />
           
        </div>
    );
};

export default Home;
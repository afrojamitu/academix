import React from 'react';
import Banner from '../Banner/Banner';
import TopCollege from '../TopCollege/TopCollege';
import Gallery from '../Gallery/Gallery';
import Reviews from '../Reviews/Reviews';
import FromCEO from '../../FromCEO/FromCEO';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopCollege></TopCollege>
            <Gallery></Gallery>
            <Reviews></Reviews>
            <FromCEO></FromCEO>
        </div>
    );
};

export default Home;
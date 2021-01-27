import React from 'react';
import './style.css'; //importing css style file
import home from './image/home.jpg' //importing image file
const Home = () => {
    return (
        <>
        <h3 className="my-3">Welcome to Nico-flix</h3>

        {/* setting image */}
        <img  className="home-image" src={home} />
        </>
    );
};

export default Home;
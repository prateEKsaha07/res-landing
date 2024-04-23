import React from 'react'
import Navbar from './Navbar';
import bannerImage from "../Assets/home-banner-background.png";
import { BsArrow90DegRight } from 'react-icons/bs';

const Home = () => {
  return ( <div className="home-container">
        <Navbar />
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={bannerImage} alt="" />
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">
              your food delivered hot and fresh
            </h1>
            <p className="primary-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio maiores ipsam praesentium aliquid rerum explicabo pariatur accusantium ex eum neque quidem odit nobis, quas nemo cupiditate accusamus error? Non, vel.
            </p>
            <button className="secondary-button">
              ORDER NOW <BsArrow90DegRight /> </button>
          </div>
        </div>
    </div>
  );
};

export default Home
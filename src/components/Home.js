import React from 'react'
import Navbar from './Navbar';
import bannerImage from "../Assets/home-banner-background.png";
import bannerbackground from "../Assets/home-banner-image.png";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

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
            Fresh food, vibrant and unprocessed, epitomizes nature's bounty. From crisp vegetables to succulent fruits, it offers an array of flavors and nutrients. With its immediate connection to the earth, fresh food invigorates both body and soul.
            </p>
            <button className="secondary-button">
              ORDER NOW <BsFillArrowRightCircleFill /> </button>
          </div>
          <div className="home-image-section">
            <img src={bannerbackground} alt="" />
          </div>
        </div>
    </div>
  );
};

export default Home
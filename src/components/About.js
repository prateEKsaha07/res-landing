import React from 'react'
import AboutBackground from "../Assets/about-background.png"
import AboutBackgroundImage from "../Assets/about-background-image.png"
import { BsFillPlayCircleFill } from 'react-icons/bs'


const About = () => {
    return (
        <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt="" />
            </div>
            <div className="about-section-text-container">
                <div className="primary-heading">
                    about
                </div>
                <h1 className="primary-subheading">
                    food is an important part of balance diet
                </h1>
                <p className="primary-text">
                    Welcome to our webpage celebrating the essence of fresh food in a balanced diet. At our foodie company, we understand the pivotal role fresh food plays in nourishing your body and mind. Raw and unprocessed, it retains its natural vitality, offering a plethora of essential nutrients.
                </p>
                <p className="primary-text">
                    With a focus on delivering freshness straight to your doorstep, we ensure that each ingredient maintains its optimal flavor and nutritional value. From crisp greens to juicy fruits, our commitment to quality shines through in every bite.
                </p>
                <p className="primary-text">
                    Our dedication to providing fresh ingredients extends beyond mere sustenance; it's about embracing a lifestyle centered around wholesome eating. By incorporating fresh food into your daily meals, you embark on a journey towards enhanced well-being and vitality.
                </p>
                <div className="about-button-container">
                    <button className="watch-video-button">
                        watch more <BsFillPlayCircleFill />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About    
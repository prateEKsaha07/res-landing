import React from 'react'
import AboutBackground from "../Assets/about-background.png"
import AboutBackgroundImage from "../Assets/about-background-image.png"
import { BsFillPlayCircleFill } from 'react-icons/bs'


const About = () => {
  return (
    <div className="about-section-container">
        <div className="about-background-image-container">
            <img src={ AboutBackground } alt="" />
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, dolor molestiae! Quae voluptatum facilis, harum quasi vitae porro animi error exercitationem reprehenderit consequuntur numquam odit iure ex aspernatur, laboriosam consequatur nesciunt maiores vel minus nobis nostrum soluta, ratione necessitatibus accusamus.
            </p>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eius dolore cumque, doloribus cum aliquam laboriosam perspiciatis obcaecati corrupti dolores minus perferendis, accusantium error nihil earum facilis molestiae aspernatur ducimus accusamus exercitationem omnis. Iusto quas provident nemo fugit! A, dolorum!
            </p>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sunt inventore placeat, dolore animi velit, nobis nostrum debitis quibusdam, magni sit odio nesciunt alias facilis ipsam laboriosam perspiciatis ratione fugiat veritatis suscipit vitae nihil eveniet. Iusto atque provident vel expedita?
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
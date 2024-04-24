import React from 'react'
import profileId from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-heading">
                    TESTIMONIALS
                </p>
                <h1 className="primary-subheading">
                    what are they saying ?
                </h1>
                <p className="primary-text">
                As the owner, I am deeply invested in ensuring every aspect of our restaurant reflects our dedication to quality. From meticulously curating our menu to orchestrating seamless home delivery, we prioritize excellence. Your satisfaction fuels our passion, driving us to continuously elevate your dining experience and exceed your expectations.
                </p>
            </div>
            <div className="testimonial-section-bottom">
                <img src={profileId} alt="#" />
                <p>
                "From the moment I stepped in, I was captivated by the inviting ambiance and attentive service. The menu boasted an impressive array of options, and each dish I sampled surpassed my expectations. The ingredients were fresh, the flavors were exquisite, and the presentation was impeccable. The fast home delivery service ensured that I could enjoy the same exceptional quality in the comfort of my own home. Overall, a truly delightful dining experience that I can't wait to repeat."
                </p>
                <div className="testimonial-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>John Doe</h2>
            </div>

        </div>
    )
}

export default Testimonials
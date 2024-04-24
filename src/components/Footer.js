import React from 'react'
import Logo from "../Assets/Logo.svg"
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="footer-wrapper">
        <div className="footer-section-one">
            <div className="footer-logo-container">
                <img src= {Logo} alt="" />
            </div>
            <div className="footer-icon">
                <BsTwitter />
                <BsLinkedin />
                <BsYoutube />
                <BsFacebook />
            </div>
        </div>
        <div className="footer-section-two">
            <div className="footer-section-columns">
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Carriers</span>
                <span>Testimonials</span>
                <span>Work</span>
            </div>
            <div className="footer-section-columns">
                <span>2345-1233-5648</span>
                <span>prateEKsaha07-git</span>
                <span>foodie@food.com</span>
                <span>thehyperart11-git</span>
            </div>
            <div className="footer-section-columns">
                <span>terms & conditions </span>
                <span>privacy policy</span>
            </div>
        </div>
    </div>
  )
}

export default Footer
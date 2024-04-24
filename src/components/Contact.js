import React from 'react'
import { BsArrowDownRightCircleFill } from 'react-icons/bs'

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
        <h1 className="primary-heading">
          WANNA ASK ANYTHING
        </h1>
        <h1 className="primary-subheading">
            LET US HELP YOU <BsArrowDownRightCircleFill />
        </h1>
        <div className="contact-form-container">
            <input type="text" placeholder="your@gmail.com" />
            <button className="secondary-button">submit NOW</button>
        </div>
    </div>
  )
}

export default Contact
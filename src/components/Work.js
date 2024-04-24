import React from 'react'
import pickMeal from "../Assets/pick-meals-image.png";
import choose from "../Assets/choose-image.png";
import delivery from "../Assets/delivery-image.png";


const Work = () => {
    const workInfoData = [
        {
            image: pickMeal,
            title: "pick meals",
            text: "Browse our chef-curated menu, featuring a variety of nutritious meals crafted with fresh ingredients. Select your favorites and enjoy restaurant-quality dining in the comfort of your own home.",
        },
        {
            image: choose,
            title: "choose meal",
            text: "Indulge in our chef-curated menu, showcasing an array of delectable dishes prepared with care. Select your favorites to elevate your dining experience.",
        },
        {
            image: delivery,
            title: "fast delivery",
            text: "Experience the convenience of swift home delivery. From our kitchen to your doorstep, enjoy fresh, flavorful meals delivered promptly for your dining pleasure.",
        },
    ];
    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-heading">
                    work
                </p>
                <h1 className="primary-subheading">
                    how it exactly works ?
                </h1>
                <p className="primary-text">
                Welcome to our unique platform offering personalized diet guides, fresh ingredient delivery, and restaurant-quality meals. Tailor your diet plan, choose from fresh ingredients sourced locally, and enjoy chef-prepared dishes delivered to your doorstep. With expert nutritional support, we're here to elevate your culinary journey and promote a balanced lifestyle.
                </p>
            </div>
            <div className="work-section-bottom">
                {workInfoData.map((data) => (
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="#" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work
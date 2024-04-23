import React from 'react'
import pickMeal from "../Assets/pick-meals-image.png";
import choose from "../Assets/choose-image.png";
import delivery from "../Assets/delivery-image.png";


const Work = () => {
    const workinfo = [
        {
            image: pickMeal,
            title: "pick meals",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, voluptate atque earum facilis saepe deserunt assumenda est dolorum veniam adipisci?",
        },
        {
            image: choose,
            title: "choose meal",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, officia modi! Distinctio iure rem numquam voluptate dicta tempore eveniet et.",
        },
        {
            image: delivery,
            title: "fast delivery",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vel nesciunt fugit voluptatibus rem quod inventore reiciendis tenetur distinctio voluptate?",
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste pariatur nobis, recusandae illo accusamus magnam veniam. Ipsa quas tenetur beatae, nostrum excepturi itaque quia fugit minima, molestiae voluptate quam. Consectetur nesciunt incidunt itaque placeat, distinctio numquam ad facere, nemo iusto expedita dicta quos nisi! Ullam est quod quisquam totam ab.
                </p>
            </div>
            <div className="work-section-bottom">
                {workinfo.map = ((data) => {
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="#" />
                        </div>

                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Work
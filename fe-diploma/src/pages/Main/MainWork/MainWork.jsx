import React from "react";
import "./MainWork.css";
import workImage1 from "#assets/main-work-icon-1.png";
import workImage2 from "#assets/main-work-icon-2.png";
import workImage3 from "#assets/main-work-icon-3.png";

const workItems = [
    {
        src: workImage1,
        alt: "Удобный заказ на сайте",
        text: "Удобный заказ на сайте",
    },
    {
        src: workImage2,
        alt: "Нет необходимости ехать в офис",
        text: "Нет необходимости ехать в офис",
    },
    {
        src: workImage3,
        alt: "Огромный выбор направлений",
        text: "Огромный выбор направлений",
    },
];

function MainWork() {
    return (
        <section className="main-work work" id="work">
            <div className="container">
                <div className="work__content-wrapper">
                    <h2 className="work__title">Как это работает</h2>
                    <div className="work__btn-wrapper">
                        <button className="work__btn">Узнать больше</button>
                    </div>
                    <div className="work__list">
                        {workItems.map((item, index) => (
                            <div className="work__item" key={index}>
                                <img src={item.src} alt={item.alt} />
                                <p className="work__item-text">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainWork;
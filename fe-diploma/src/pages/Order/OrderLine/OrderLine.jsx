import React from "react";
import Line1 from "#assets/order-step-1.png";
import Line2 from "#assets/order-step-2.png";
import Line3 from "#assets/order-step-3.png";
import Line4 from "#assets/order-step-4.png";
import "./OrderLine.css";

function OrderLine() {
    const path = window.location.pathname;

    const steps = [
        { title: "Билеты", image: Line1 },
        { title: "Пассажиры", image: Line2 },
        { title: "Оплата", image: Line3 },
        { title: "Проверка", image: Line4 },
    ];

    const currentStepIndex = path.includes("passengers") ? 1 :
        path.includes("payment") ? 2 :
            path.includes("confirm") ? 3 : 0;

    const bgLine = { backgroundImage: `url(${steps[currentStepIndex].image})` };

    return (
        <div className={`order-line line ${path.includes("confirm") ? "order-line-all" : ""}`}>
            <div className="line__container">
                <ol className="line__list line__list-bg" style={bgLine}>
                    {steps.map((step, index) => (
                        <li key={index} className="line__item">
                            <p className="line__title">
                                <span className="line__num">{index + 1}</span>
                                {step.title}
                            </p>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default OrderLine;
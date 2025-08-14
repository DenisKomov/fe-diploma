import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import RouteContext from "#context/routeContext";
import SVGicon from "#components/SVGicon/SVGicon";
import "./SeatsWagonTypes.css";

function SeatsWagonTypes({ data, identity, onChange }) {
    const { routeState, setRouteState } = useContext(RouteContext);
    const wagonClasses = data.map(obj => obj.coach.class_type);
    const [activeClass, setActiveClass] = useState(null);

    const handleWagonClassChange = (targetClass) => {
        setActiveClass(targetClass);
        onChange({ [`${identity}Class`]: targetClass });
        setRouteState({
            ...routeState,
            [`${identity}Class`]: targetClass,
            [`targetType${identity}`]: data.filter(item => item.coach.class_type === targetClass),
        });
        updateWagonVisibility(targetClass);
    };

    const updateWagonVisibility = (targetClass) => {
        const way = [...document.querySelectorAll(".seats__container")];

        const wagons = identity === "departure"
            ? [...way[0].querySelectorAll(".seats__wagon-details")]
            : [...way[1].querySelectorAll(".seats__wagon-details")];

        wagons.forEach(item => {
            item.style.display = item.children[0].children[0].textContent === targetClass ? "flex" : "none";
        });
    };

    const wagonTypes = [
        { id: "fourth", label: "Сидячий", className: "wagon-type__have_fourth_class" },
        { id: "third", label: "Плацкарт", className: "wagon-type__have_third_class" },
        { id: "second", label: "Купе", className: "wagon-type__have_second_class" },
        { id: "first", label: "Люкс", className: "wagon-type__have_first_class" }
    ];

    return (
        <div className="seats__wagon-types wagon-types" id={`wagon-types-${identity}`}>
            <p className="wagon-types__title">Тип вагона</p>
            <div className="wagon-types__list">
                {wagonTypes.map(({ id, label, className }) => (
                    <button
                        key={id}
                        className={`wagon-types__item ${className} ${activeClass === id ? 'wagon-types__item-active' : ''}`}
                        id={id}
                        type="button"
                        disabled={!wagonClasses.includes(id)}
                        onClick={() => handleWagonClassChange(label)}
                    >
                        <div className="wagon-type__icon">
                            <SVGicon name={className} />
                        </div>
                        <p className="wagon-type__text">{label}</p>
                    </button>
                ))}
            </div>
        </div>
    );
}

SeatsWagonTypes.propTypes = {
    data: PropTypes.array.isRequired,
    identity: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

export default SeatsWagonTypes;
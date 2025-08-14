import React from "react";
import PropTypes from "prop-types";
import Icon from "./SVGicon.svg";

function SVGicon({ name, width = "1em", height = "1em", fill = "currentColor", stroke = "transparent" }) {
    return (
        <svg
            className={`icon icon-${name}`}
            width={width}
            height={height}
            fill={fill}
            stroke={stroke}
        >
            <use xlinkHref={`${Icon}#icon-${name}`} />
        </svg>
    );
}

SVGicon.propTypes = {
    name: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    fill: PropTypes.string,
    stroke: PropTypes.string,
};

export default SVGicon;
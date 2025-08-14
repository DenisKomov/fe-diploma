import React from "react";
import PropTypes from "prop-types";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function TooltipBlock({ id, text }) {
    const style = {
        display: "block",
        padding: "5px 10px",
        borderRadius: "5px",
        textAlign: "center",
        fontSize: "16px",
        color: "#000000",
        backgroundColor: "#ebebeb",
        boxShadow: "0px 4px 4px #00000040",
    };

    return (
        <Tooltip
            id={id}
            style={style}
        >
            {text} {}
        </Tooltip>
    );
}

TooltipBlock.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired, 
};

export default TooltipBlock;
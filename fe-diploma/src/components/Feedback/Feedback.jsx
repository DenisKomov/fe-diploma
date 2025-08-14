import React from "react";
import PropTypes from "prop-types";
import "./Feedback.css";

function Feedback({ avatar, name, text }) {
    return (
        <div className="feedback__container">
            <img src={avatar} alt={`Avatar of ${name}`} className="feedback__avatar" />
            <div className="feedback__author-content">
                <p className="feedback__author-name">{name}</p>
                <p className="feedback__author-feedback">
                    <span className="feedback__author-feedback-text">
                        {text}
                    </span>
                </p>
            </div>
        </div>
    );
}

Feedback.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Feedback;
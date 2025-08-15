import React from "react";
import PropTypes from "prop-types";
import MainAbout from "./MainAbout/MainAbout";
import MainWork from "./MainWork/MainWork";
import MainFeedback from "./MainFeedback/MainFeedback";
import "./Main.css";

function Main({ title }) {
    return (
        <main className="main">
            {title && <h1 className="main-title">{title}</h1>} {}
            <MainAbout />
            <MainWork />
            <MainFeedback />
        </main>
    );
}

Main.propTypes = {
    title: PropTypes.string
};

Main.defaultProps = {
    title: "Добро пожаловать"
};

export default React.memo(Main);
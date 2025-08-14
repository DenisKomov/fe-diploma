import React from "react";
import PropTypes from "prop-types";
import MainAbout from "./MainAbout/MainAbout";
import MainWork from "./MainWork/MainWork";
import MainFeedback from "./MainFeedback/MainFeedback";
import "./Main.css";

function Main() {
    return (
        <main className="main">
            <MainAbout />
            <MainWork />
            <MainFeedback />
        </main>
    );
}

Main.propTypes = {
};

export default React.memo(Main);
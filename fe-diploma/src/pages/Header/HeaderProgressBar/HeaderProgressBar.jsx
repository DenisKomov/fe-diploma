import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./HeaderProgressBar.css";

function HeaderProgressBar({ loading }) {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(loading);

    useEffect(() => {
        const loadTime = performance.getEntriesByType("navigation");

        const updateProgress = () => {
            if (isLoading) {
                const domComplete = loadTime[0]?.domComplete || 0;
                const maxLoadTime = domComplete;
                const currentLoadTime = Date.now() - performance.timing.navigationStart;

                setProgress((currentLoadTime / maxLoadTime) * 100);

                if (currentLoadTime >= maxLoadTime) {
                    setIsLoading(false);
                    setProgress(100);
                }
            }
        };

        const interval = setInterval(updateProgress, 100);

        window.onload = () => {
            setIsLoading(false);
            setProgress(100);
        };

        return () => {
            clearInterval(interval);
        };
    }, [isLoading]);

    return (
        <div className="header-progress">
            <progress
                className="progress-bar"
                value={progress}
                max="100"
                aria-label="Загрузка страницы"
            ></progress>
        </div>
    );
}

HeaderProgressBar.propTypes = {
    loading: PropTypes.bool
};

HeaderProgressBar.defaultProps = {
    loading: true
};

export default HeaderProgressBar;
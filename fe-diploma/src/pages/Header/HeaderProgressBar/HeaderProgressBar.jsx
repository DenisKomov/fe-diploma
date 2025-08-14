import React, { useState, useEffect } from "react";
import "./HeaderProgressBar.css";

function HeaderProgressBar() {
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTime = performance.getEntriesByType("navigation");

        const updateProgress = () => {
            if (loading) {
                const domComplete = loadTime[0]?.domComplete || 0;
                const domContentLoaded = loadTime[0]?.domContentLoadedEventEnd || 0;
                const maxLoadTime = domComplete;
                const currentLoadTime = Date.now() - performance.timing.navigationStart;

                setProgress((currentLoadTime / maxLoadTime) * 100);

                if (currentLoadTime >= maxLoadTime) {
                    setLoading(false);
                    setProgress(100);
                }
            }
        };

        const interval = setInterval(updateProgress, 100);

        window.onload = () => {
            setLoading(false);
            setProgress(100);
        };

        return () => {
            clearInterval(interval);
        };
    }, [loading]);

    return (
        <div className="header-progress">
            <progress
                className="progress-bar"
                value={progress}
                max="100"
                aria-label="Загрузка страницы">
            </progress>
        </div>
    );
}

export default HeaderProgressBar;
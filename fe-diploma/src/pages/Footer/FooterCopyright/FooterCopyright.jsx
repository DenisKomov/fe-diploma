import React from "react";
import { Link } from "react-router-dom";
import "./FooterCopyright.css";

function FooterCopyright() {
    const handlerScrollUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="footer-copyright copyright">
            <div className="container copyright-container">
                <Link to="#" className="copyright-logo__link" aria-label="Логотип">Лого</Link>
                <button
                    className="copyright-top-btn"
                    type="button"
                    onClick={handlerScrollUp}
                    aria-label="Вернуться наверх"
                >
                    ↑
                </button>
                <p className="copyright-info">© 2018 WEB</p>
            </div>
        </div>
    );
}

export default FooterCopyright;
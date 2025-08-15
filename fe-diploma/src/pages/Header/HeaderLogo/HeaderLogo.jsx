import React from "react";
import { Link } from "react-router-dom";
import "./HeaderLogo.css";
import logo from './logo.png';

function HeaderLogo() {
    return (
        <div className="header-logo">
            <div className="container">
                <Link to="/fe-diploma" className="header-logo__link" aria-label="Ссылка на главную">
                    <img src={logo} alt="Логотип" className="header-logo__image" />
                </Link>
            </div>
        </div>
    );
}

export default HeaderLogo;
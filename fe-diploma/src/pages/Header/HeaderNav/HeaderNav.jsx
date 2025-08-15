import React from "react";
import PropTypes from "prop-types";
import { HashLink } from "react-router-hash-link";
import "./HeaderNav.css";

function HeaderNav({ title }) {
    return (
        <div className="header-nav">
            <div className="container">
                <h1>{title}</h1> {}
                <nav className="header-nav__nav nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <HashLink
                                to="/fe-diploma/#about"
                                className="nav__link"
                                activeClassName="nav__link--active"
                            >
                                О нас
                            </HashLink>
                        </li>
                        <li className="nav__item">
                            <HashLink
                                to="/fe-diploma/#work"
                                className="nav__link"
                                activeClassName="nav__link--active"
                            >
                                Как это работает
                            </HashLink>
                        </li>
                        <li className="nav__item">
                            <HashLink
                                to="/fe-diploma/#feedback"
                                className="nav__link"
                                activeClassName="nav__link--active"
                            >
                                Отзывы
                            </HashLink>
                        </li>
                        <li className="nav__item">
                            <HashLink
                                to="/fe-diploma/#contacts"
                                className="nav__link"
                                activeClassName="nav__link--active"
                            >
                                Контакты
                            </HashLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

HeaderNav.propTypes = {
    title: PropTypes.string,
};

HeaderNav.defaultProps = {
    title: "Главное меню",
};

export default HeaderNav;
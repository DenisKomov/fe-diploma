import React from "react";
import PropTypes from "prop-types";
import FooterContact from "./FooterContact/FooterContact";
import FooterSubscribe from "./FooterSubscribe/FooterSubscribe";
import FooterCopyright from "./FooterCopyright/FooterCopyright";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer" id="contacts">
            <div className="container footer-container">
                <FooterContact />
                <FooterSubscribe />
            </div>
            <div className="footer-decorate-line" />
            <FooterCopyright />
        </footer>
    );
}

Footer.propTypes = {

};

export default Footer;
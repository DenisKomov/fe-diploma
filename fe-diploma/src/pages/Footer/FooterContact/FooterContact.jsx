import React from "react";
import { Link } from "react-router-dom";
import { contacts } from "#utils/contacts";
import "./FooterContact.css";

function ContactItem({ item }) {
    return (
        <li className="contact__item">
            <Link to={item.href} target="_blank" className="contact__link">
                <img src={item.src} alt={item.alt} className="contact__image" />
                <p className="contact__desc">{item.desc}</p>
            </Link>
        </li>
    );
}

function FooterContact() {
    return (
        <div className="footer-contact contact">
            <p className="contact__title">Свяжитесь с нами</p>
            <ul className="contact__list">
                {contacts.map((item) => (
                    <ContactItem key={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
}

export default FooterContact;
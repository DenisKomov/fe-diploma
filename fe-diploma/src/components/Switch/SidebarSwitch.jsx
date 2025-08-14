import React from "react";
import PropTypes from "prop-types";
import { Switch } from "antd";
import "./SidebarSwitch.css";

function SidebarSwitch({ name, onChange }) {
    const handleClick = (value) => {
        if (typeof onChange !== 'function') {
            console.warn('onChange должен быть функцией');
            return;
        }

        const obj = { [name]: value };
        onChange(obj);
    };

    return (
        <Switch className="switch__btn" data-name={name} onChange={handleClick} />
    );
}

SidebarSwitch.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SidebarSwitch;
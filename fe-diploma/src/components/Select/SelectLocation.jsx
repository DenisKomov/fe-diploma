import React, { useState } from "react";
import PropTypes from "prop-types";
import { Select } from "antd";
import useGetCities from "#services/useGetCities";
import "./SelectLocation.css";

const SelectLocation = ({ name, placeholder, onValue }) => {
    const [input, setInput] = useState('');
    const { result = [] } = useGetCities(input);

    const getID = (array, value) => {
        const city = array.find(item => item.name === value);
        return city ? city._id : null;
    };

    const getOptionsArray = (array) => {
        return array.map(item => ({
            value: item.name.toLowerCase(),
            label: item.name.toUpperCase(),
            key: item._id
        }));
    };

    const filterOption = (inputValue, option) => {
        return (option?.label ?? "").toLowerCase().includes(inputValue.toLowerCase());
    };

    const onChange = (value) => {
        const key = placeholder === "Откуда" ? "from_city" : "to_city";
        const id = getID(result, value);

        const obj = {
            [`${key}_name`]: value.toUpperCase(),
            [`${key}_id`]: id
        };

        onValue(obj);
    };

    const onSearch = (value) => setInput(value.toUpperCase());

    return (
        <Select
            showSearch
            allowClear={false}
            className={`fieldset__input ${name}`}
            placeholder={placeholder}
            optionFilterProp="children"
            filterOption={filterOption}
            onChange={onChange}
            onSearch={onSearch}
            options={getOptionsArray(result)}
            required
        />
    );
}

SelectLocation.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onValue: PropTypes.func.isRequired,
};

export default SelectLocation;
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import "./Calendar.css";

function Calendar({ name, placeholder, onChange }) {
    const $input = useRef();
    const element = useRef();
    const [dates, setDates] = useState({});

    useEffect(() => {
        element.current = new AirDatepicker($input.current, {
            dateFormat(date) {
                const formattedDate = date.toLocaleString("ru-RU", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                });
                return `${formattedDate.slice(6)}-${formattedDate.slice(3, 5)}-${formattedDate.slice(0, 2)}`;
            },
            navTitles: {
                days: "MMMM",
            },
            onSelect({ date }) {
                const newDate = date.toLocaleString("ru-RU", { year: "numeric", month: "numeric", day: "numeric" });
                const updatedDate = `${newDate.slice(6)}-${newDate.slice(3, 5)}-${newDate.slice(0, 2)}`;

                setDates((prev) => ({
                    ...prev,
                    [name]: updatedDate,
                }));

                onChange({ date_start: dates.date_start, date_end: dates.date_end });
            }
        });

        return () => {
            element.current.destroy();
        };
    }, [name, onChange]);

    useEffect(() => {
        element.current.update({});
    }, [dates]);

    return (
        <input
            ref={$input}
            placeholder={placeholder}
            className={`fieldset__input ${name}`}
            required
        />
    );
}

Calendar.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Calendar;
import React from "react";
import PropTypes from "prop-types";

const TextFieldTotalPrice = ({ type, name, value, onChange, label, color }) => {
    function handleChange({ target }) {
        onChange({ name: target.name, value: target.value });
    }

    return (
        <>
            <label className={color ? "rental-label_black" : "rental-label"}>
                {label}
            </label>
            <div className="details-wrapper_time">
                <div className="counter-wrapper_money">
                    <input
                        className="input-money_total"
                        placeholder={value}
                        name={name}
                        id={name}
                        onChange={handleChange}
                        type={type}
                    />
                </div>
            </div>
        </>
    );
};
TextFieldTotalPrice.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    label: PropTypes.string,
    color: PropTypes.bool
};
export default TextFieldTotalPrice;

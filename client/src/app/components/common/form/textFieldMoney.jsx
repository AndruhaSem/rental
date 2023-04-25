import React from "react";
import PropTypes from "prop-types";

const TextFieldMoney = ({ type, name, value, onChange }) => {
    function handleChange({ target }) {
        onChange({ name: target.name, value: target.value });
    }

    return (
        <div>
            <input
                className="input-money"
                placeholder={value}
                name={name}
                id={name}
                onChange={handleChange}
                type={type}
            />
        </div>
    );
};
TextFieldMoney.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func
};
export default TextFieldMoney;

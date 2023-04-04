import React from "react";
import PropTypes from "prop-types";

const TextFieldRental = ({ label, type, name, value, onChange, error }) => {
    function handleChange({ target }) {
        onChange({
            name: target.name,
            value: name === "phone" ? Number(target.value) : target.value
        });
    }
    function getInputClasses() {
        return "form-control-rental" + (error ? " is-invalid" : "");
    }
    return (
        <div className="mb-4">
            <label className="rental-lable-form" htmlFor={name}>
                {label}
            </label>
            <div className="user-box">
                <input
                    type={type}
                    id={name}
                    value={value || ""}
                    onChange={handleChange}
                    name={name}
                    className={getInputClasses()}
                />
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};
TextFieldRental.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    error: PropTypes.string
};
export default TextFieldRental;

import React, { useState } from "react";
import PropTypes from "prop-types";

const Name = ({ label, type, name, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false);
    function handleChange({ target }) {
        onChange({ name: target.name, value: target.value });
    }
    function getInputClasses() {
        return "form-controll" + (error ? " is-invalid" : "");
    }
    function toggleShowPassword() {
        setShowPassword((prevState) => !prevState);
    }
    return (
        <div className="mbb-4">
            <label htmlFor={name}>{label}</label>
            <div className="input-groupp has-validationn">
                <input
                    type={showPassword ? "text" : type}
                    id={name}
                    value={value}
                    onChange={handleChange}
                    name={name}
                    className={getInputClasses()}
                />
                {type === "password" && (
                    <button
                        // className="btn btn-outline-secondary"
                        type="button"
                        onClick={toggleShowPassword}
                    >
                        <i
                            className={
                                "bi bi-eye" + (showPassword ? "-slash" : "")
                            }
                        ></i>
                    </button>
                )}
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};
Name.defaultProps = {
    type: "text"
};
Name.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default Name;

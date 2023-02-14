import React from "react";
import PropTypes from "prop-types";

function TimeRental({ hour, handleDecrement, handleIncrement, label, color }) {
    return (
        <>
            <label className={color ? "rental-label_black" : "rental-label"}>
                {label}
            </label>
            <div className="details-wrapper_time">
                <div className="counter-wrapper">
                    <div className="items__controll" onClick={handleDecrement}>
                        -
                    </div>
                    <div className="items__current">{hour}</div>
                    <div className="items__controll" onClick={handleIncrement}>
                        +
                    </div>
                </div>
            </div>
        </>
    );
}
TimeRental.propTypes = {
    handleDecrement: PropTypes.func,
    handleIncrement: PropTypes.func,
    hour: PropTypes.number,
    label: PropTypes.string,
    color: PropTypes.bool
};
export default TimeRental;

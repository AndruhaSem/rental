import React from "react";
import PropTypes from "prop-types";

function NumberProduct({
    handleDecrement,
    handleIncrement,
    label,
    quantity,
    color
}) {
    return (
        <>
            <label className={color ? "rental-label_black" : "rental-label"}>
                {label}
            </label>
            <div className="details-wrapper_quantity">
                <div className="items counter-wrapper">
                    <div className="items__control" onClick={handleDecrement}>
                        -
                    </div>
                    <div className="items__current">{quantity}</div>
                    <div className="items__control" onClick={handleIncrement}>
                        +
                    </div>
                </div>
            </div>
        </>
    );
}
NumberProduct.propTypes = {
    handleDecrement: PropTypes.func,
    handleIncrement: PropTypes.func,
    quantity: PropTypes.number,
    label: PropTypes.string,
    color: PropTypes.bool
};
export default NumberProduct;

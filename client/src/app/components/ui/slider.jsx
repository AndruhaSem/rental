import React from "react";
import PropTypes from "prop-types";

const Slider = ({
    offset,
    sliders,
    handleClickLeft,
    handleClickRight,
    handleTouchStart,
    handleTouchMove
}) => {
    return (
        <div className="slider">
            <div className="block-information-sliders">
                <div className="information-text">
                    <p className="slider-text">Товары</p>
                </div>

                <div className="slider-button">
                    <i
                        className="bi bi-caret-left-fill"
                        onClick={handleClickLeft}
                    ></i>
                    <i
                        className="bi bi-caret-right-fill"
                        onClick={handleClickRight}
                    ></i>
                </div>
            </div>
            <div
                className="slider-line"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                style={{ left: `${-offset}px` }}
            >
                {sliders.map((s) => (
                    <div className="item" key={s.id}>
                        <img className="item-img" src={s.image} alt={s.title} />
                        <div className="content">
                            <p>{s.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
Slider.propTypes = {
    offset: PropTypes.number,
    sliders: PropTypes.array,
    handleClickLeft: PropTypes.func,
    handleClickRight: PropTypes.func,
    handleTouchStart: PropTypes.func,
    handleTouchMove: PropTypes.func
};

export default Slider;

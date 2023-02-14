import React from "react";
import PropTypes from "prop-types";

const SliderImage = ({ offset, sliders }) => {
    return (
        <div className="slider-line" style={{ left: `${-offset}px` }}>
            {sliders.map((s) => (
                <div className="item" key={s._id}>
                    <img className="item-img" src={s.image} alt={s.title} />
                    <div className="content">
                        <p>{s.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
SliderImage.propTypes = {
    offset: PropTypes.number,
    sliders: PropTypes.array
};

export default SliderImage;
